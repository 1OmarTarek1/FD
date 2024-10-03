import project_01 from '../../Assets/Images/projects/project-01.jpg';
import project_02 from '../../Assets/Images/projects/project-02.jpg';
import project_03 from '../../Assets/Images/projects/project-03.jpg';
import project_04 from '../../Assets/Images/projects/project-04.jpg';
import project_05 from '../../Assets/Images/projects/project-05.jpg';
import './ProjectsSec.css'


const projectData = [
    {
        id: "project-01",
        projectImg: project_01,
        projectTitle: "Water connection DN 700",
        date: "2022",
        client: "Harry Kain",
    },
    {
        id: "project-02",
        projectImg: project_02,
        projectTitle: "City Pipeline Renovation",
        date: "2023",
        client: "Alice Johnson"
    },
    {
        id: "project-03",
        projectImg: project_03,
        projectTitle: "Hydraulic Dam Installation",
        date: "2021",
        client: "John Doe"
    },
    {
        id: "project-04",
        projectImg: project_04,
        projectTitle: "Irrigation System Upgrade",
        date: "2020",
        client: "Sarah Lee"
    },
    {
        id: "project-05",
        projectImg: project_05,
        projectTitle: "Commercial Water Supply",
        date: "2022",
        client: "Tom Cruise"
    },
    {
        id: "project-06",
        projectImg: project_01,
        projectTitle: "Residential Plumbing Overhaul",
        date: "2019",
        client: "Emma Watson"
    },
    {
        id: "project-07",
        projectImg: project_02,
        projectTitle: "Wastewater Treatment Plant",
        date: "2021",
        client: "Robert Downey"
    },
    {
        id: "project-08",
        projectImg: project_03,
        projectTitle: "Water Efficiency Solutions",
        date: "2020",
        client: "Chris Evans"
    },
    {
        id: "project-09",
        projectImg: project_04,
        projectTitle: "Industrial Water Supply",
        date: "2023",
        client: "Scarlett Johansson"
    },
    {
        id: "project-10",
        projectImg: project_05,
        projectTitle: "Smart Water Meter Installation",
        date: "2022",
        client: "Mark Ruffalo"
    }
];

const ProjectsSec = () => {
    return (
        <ul className="all-projects" 
        data-aos={"fade-up"}
        data-aos-delay={"300"}
        >
            {projectData.map(({ id, projectImg, projectTitle, date, client }) => (
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