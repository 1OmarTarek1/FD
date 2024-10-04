
import { ProjectsSec } from '../../Sections';

import './ProjectsPage.css';



const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <h1 className="pageTitle" >
                <span
                style={{position:"relative", top:"-2rem"}} 
                data-aos={"fade-up"}>
                    A selection of our projects
                </span>
            </h1>
            <ProjectsSec />
        </div>
    );
};

export default ProjectsPage;
