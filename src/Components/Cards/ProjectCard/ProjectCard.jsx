import './ProjectCard.css';






const ProjectCard = ({ id, projectImg, projectTitle, date, client }) => {
    return (        
        <li key={id} className="project">
            <div className="imgPro-Wrapper">
                <img src={projectImg} alt={projectTitle} className="project-img" />
            </div>
            <div className="project-title">{projectTitle}</div>
            <div className="info-wrapper">
                <div className="info-text date-text">Completion:</div>
                <span className="info date">{date}</span>
            </div>
            <div className="info-wrapper">
                <div className="info-text client-text">Client:</div>
                <span className="info client">{client}</span>
            </div>
        </li>
    );
}

export default ProjectCard;
