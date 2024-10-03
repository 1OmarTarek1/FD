import ProjectData from '../../Data/ProjectsData'
import './ProjectsSec.css'




const ProjectsSec = () => {
    return (
        <ul className="all-projects" 
        data-aos={"fade-up"}
        data-aos-delay={"300"}
        >
            {ProjectData.map(({ id, projectImg, projectTitle, date, client }) => (
                <li key={id} className="project">
                    <div className="imgPro-Wrapper">
                        <img  src={projectImg} alt={projectTitle} className="project-img" />
                    </div>
                    <div className="project-title">{projectTitle}</div>
                    <div className="info-wrapper">
                        <div className="info-text date-text">Completion:</div>
                        <span className='info date'>{date}</span>
                    </div>
                    <div className="info-wrapper">
                        <div className="info-text client-text">Client:</div>
                        <span className='info client'>{client}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ProjectsSec