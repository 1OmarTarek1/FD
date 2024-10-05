import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceRightSide.css';
import { BackendLink } from '../../../Components';

const ServiceRightSide = () => {
    const [randomServices, setRandomServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(`${BackendLink}/AllServices/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Shuffle the services and pick 3 random ones
                const shuffledServices = [...data].sort(() => 0.5 - Math.random());
                const selectedServices = shuffledServices.slice(0, 3);
                setRandomServices(selectedServices);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
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
                Some of our Services
            </h4>
            <div className="ServiceRightSide">
                {randomServices.map(({ id, bgImg, txt }, index) => (
                    <Link 
                        to={`/Services/${id}`} 
                        key={id} 
                        className="service-card"
                        data-aos={"fade-up"}
                        data-aos-delay={`${index}00`}
                    >
                        <div className="rightServiceImg-wrapper">
                            <img src={bgImg} alt={txt} className="service-image" />
                        </div>
                        <h3 className='rightSideSerTitle'>{txt}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ServiceRightSide;

