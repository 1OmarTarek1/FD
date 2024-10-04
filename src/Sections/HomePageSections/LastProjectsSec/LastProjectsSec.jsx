import React, { useEffect, useState } from 'react';
import { GrUserWorker } from 'react-icons/gr';
import { ProjectCard } from '../../../Components';
import './LastProjectsSec.css';

const LastProjectsSec = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/AllProjects/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProjects(data); // Assuming your server returns an array of projects
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Filter the important projects
    const importantProjects = projects.filter(project => project.important);

    if (loading) {
        return <div>Loading...</div>; // Optionally, you can add a loading spinner
    }

    if (error) {
        return <div>Error: {error}</div>; // Handle error if fetching fails
    }

    return (
        <div className='LastProjectsSec'>
            <h1 className='LastProjectsSec-title' data-aos={"fade-up"}>
                <GrUserWorker />
                Projects
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
