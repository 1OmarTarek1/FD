import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectRightSide.css';
import { BackendLink } from '../../../Components';

const ProjectRightSide = () => {
    const [randomProjects, setRandomProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${BackendLink}/AllProjects/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Shuffle the projects and pick 3 random ones
                const shuffledProjects = [...data].sort(() => 0.5 - Math.random());
                const selectedProjects = shuffledProjects.slice(0, 3);
                setRandomProjects(selectedProjects);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Loading and error handling
    if (loading) {
        return <div>Loading...</div>; // Optionally, show a loading spinner
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if fetch fails
    }

    return (
        <div className="">
            <h4 className="serRightMainTitle" data-aos={"fade-up"}>
                Some of our Projects
            </h4>
            <div className="ProjectRightSide">
                {randomProjects.map(({ id, projectImg, projectTitle }, index) => (
                    <Link 
                        to={`/Projects`} 
                        key={id} 
                        className="project-card"
                        data-aos={"fade-up"}
                        data-aos-delay={`${index}00`}
                    >
                        <div className="rightProjectImg-wrapper">
                            <img src={projectImg} alt={projectTitle} className="project-img" />
                        </div>
                        <h3 className='rightSideSerTitle'>{projectTitle}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProjectRightSide;
