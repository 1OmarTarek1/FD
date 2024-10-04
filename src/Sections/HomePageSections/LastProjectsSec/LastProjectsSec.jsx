import { ProjectCard } from '../../../Components';
import ProjectData from '../../../Data/ProjectsData';
import './LastProjectsSec.css';

const LastProjectsSec = () => {
    // Filter the important projects
    const importantProjects = ProjectData.filter(project => project.important);

    return (
        <div className='LastProjectsSec'>
            <h1 className='LastProjectsSec-title' data-aos={"fade-up"}>
                Some of our projects
            </h1>
            <ul className="allLast-projects" data-aos={"fade-up"}>
                {importantProjects.map(({ id, projectImg, projectTitle, date, client }) => (
                    <ProjectCard 
                        key={id}
                        projectImg={projectImg}
                        projectTitle={projectTitle}
                        date={date}
                        client={client}
                    />
                ))}
            </ul>
        </div>
    );
}

export default LastProjectsSec;
