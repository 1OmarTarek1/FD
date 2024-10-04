import { FaHandHoldingHeart } from "react-icons/fa6";
import { ServicesCard } from "../../../Components";
import ServicesData from '../../../Data/ServicesData';
import './ServicesSection.css';

const ServicesSection = () => {
    const cards = ServicesData.map(service => (
        <ServicesCard 
            key={service.id} 
            id={service.id}  
            image={service.image} 
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

