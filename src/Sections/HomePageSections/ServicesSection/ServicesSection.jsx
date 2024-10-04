import { useEffect, useState } from 'react';
import { FaHandHoldingHeart } from "react-icons/fa6";
import { ServicesCard } from "../../../Components";
import './ServicesSection.css';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    // Fetch data from the server
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/AllServices/'); 
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    const cards = services.map(service => (
        <ServicesCard 
            key={service.id} 
            id={service.id}  
            image={service.bgImg} 
            text={service.txt} 
            pagePath={service.pagePath} 
        />
    ));

    return (
        <div className='services-section' data-aos="fade-up">
            <h1 className="section-title">
                Our Services
                <FaHandHoldingHeart size={40}/>
            </h1>
            <div className="all-servicesCard">
                {cards}
            </div>
        </div>
    );
};

export default ServicesSection;
