import { useState, useEffect } from 'react';
import { ProjectCard } from '../../Components';
import './ProjectsSec.css';

const ProjectsSec = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the server
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/AllProjects/');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul className="all-projects"
            data-aos="fade-up"
            data-aos-delay="300"
        >
            {projects.map(({ id, projectImg, projectTitle, date }) => (
                <ProjectCard 
                    key={id}
                    projectImg={projectImg}
                    projectTitle={projectTitle}
                    date={date}
                />
            ))}
        </ul>
    );
}

export default ProjectsSec;
