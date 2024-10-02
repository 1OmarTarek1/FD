import { ServicesCard } from "../../../Components";
import ServicesData from '../../../Data/ServicesData';
import './ServicesSection.css';

const ServicesSection = () => {
    const cards = ServicesData.map(service => (
        <ServicesCard 
            key={service.id} 
            id={service.id}  
            image={service.image} 
            icon={service.icon} 
            text={service.txt} 
            pagePath={service.pagePath} 
        />
    ));

    return (
        <div className='services-section' data-aos="fade-up">
            <h2 className="section-title">Our Services</h2>
            <div className="all-servicesCard">
                {cards}
            </div>
        </div>
    );
};

export default ServicesSection;

