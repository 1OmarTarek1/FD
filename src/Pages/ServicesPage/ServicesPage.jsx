import { useParams } from 'react-router-dom';
import ServicesData from '../../Data/ServicesData';
import './ServicesPage.css';

const ServicesPage = () => {
    const { serviceId } = useParams();
    const service = ServicesData.find(item => item.id === serviceId);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className='service-page'>
            <div className="service-header">
                <img 
                    src={service.serviceData.bgImg} 
                    alt={service.serviceData.title} 
                    className="service-bgImg" 
                />
                <div className="lierEffectImg"></div>
                <div className="img-content" 
                data-aos={"fade-up"}
                data-aos-duration="600"
                >
                    <img 
                        src={service.serviceData.icon} 
                        className="service-icon" 
                        alt={service.serviceData.title} 
                    />
                    <h1 className='service-title'>
                        {service.serviceData.title}
                    </h1>
                </div>
            </div>

            <div className="servicePage-content" 
            data-aos="fade-up"
            data-aos-duration="1500"
            >
                <h2 className='service-subTitle'>
                    {service.serviceData.subTitle}
                </h2>
                <div className="para-container">
                    <p className='service-paragraph'>
                        {service.serviceData.paragraph}
                    </p>
                    <ul className='all-points'>
                        {Object.values(service.serviceData.points).map((point, index) => (
                            <li 
                            key={index}
                            className='point'
                            >
                                <div className='point-icon'></div>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
