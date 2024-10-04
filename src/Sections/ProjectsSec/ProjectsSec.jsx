import { ProjectCard } from '../../Components'
import ProjectData from '../../Data/ProjectsData'
import './ProjectsSec.css'




const ProjectsSec = () => {
    return (
        <ul className="all-projects" 
            data-aos="fade-up"
            data-aos-delay="300"
        >
            {ProjectData.map(({ id, projectImg, projectTitle, date, client }) => (
                <ProjectCard 
                    key={id}
                    projectImg={projectImg}
                    projectTitle={projectTitle}
                    date={date}
                    client={client}
                />
            ))}
        </ul>
    );
}
export default ProjectsSec