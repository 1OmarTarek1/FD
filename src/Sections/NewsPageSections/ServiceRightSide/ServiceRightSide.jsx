import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ServicesData from '../../../Data/ServicesData'
import './ServiceRightSide.css'

const ServiceRightSide = () => {
    const [randomServices, setRandomServices] = useState([]);

    useEffect(() => {
        // Shuffle the services and pick 3 random ones
        const shuffledServices = [...ServicesData].sort(() => 0.5 - Math.random());
        const selectedServices = shuffledServices.slice(0, 3);
        setRandomServices(selectedServices);
    }, []);

    return (
        <div className="">
            <h4 className="serRightMainTitle" data-aos={"fade-up"}>
                Some of our Services
            </h4>
            <div className="ServiceRightSide">
                {randomServices.map(({ id, image, txt }, index) => (
                    <Link 
                    to={`/Services/${id}`} 
                    key={id} 
                    className="service-card"
                    data-aos={"fade-up"}
                    data-aos-delay={`${index}00`}
                    >
                        <div className="rightServiceImg-wrapper">
                            <img src={image} alt={txt} className="service-image" />
                        </div>
                        <h3 className='rightSideSerTitle'>{txt}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ServiceRightSide;
