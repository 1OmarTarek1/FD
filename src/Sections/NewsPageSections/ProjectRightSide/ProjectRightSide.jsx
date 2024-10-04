import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProjectsData from '../../../Data/ProjectsData'
import './ProjectRightSide.css'

const ProjectRightSide = () => {
    const [randomProjects, setRandomProjects] = useState([]);

    useEffect(() => {
        // Shuffle the Projects and pick 3 random ones
        const shuffledProjects = [...ProjectsData].sort(() => 0.5 - Math.random());
        const selectedProjects = shuffledProjects.slice(0, 3);
        setRandomProjects(selectedProjects);
    }, []);

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
    )
}

export default ProjectRightSide;
