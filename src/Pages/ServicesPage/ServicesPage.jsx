import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServicesPage.css';
import { SecondaryBtn } from '../../Components';






const ServicesPage = () => {
    const { ServiceId } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/AllServices/');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const foundService = data.find(item => item.id.toString() === ServiceId);
                setService(foundService);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceData();
    }, [ServiceId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className='service-page'>
            <div className="service-header">
                <img 
                    src={service.bgImg} 
                    alt={service.serviceData.title} 
                    className="service-bgImg" 
                />
                <div className="lierEffectImg"></div>
                <div className="img-content" 
                data-aos={"fade-up"}
                data-aos-duration="600"
                >
                    <h1 className='service-title'>
                        {service.serviceData.title}
                    </h1>
                </div>
            </div>

            <div className="servicePage-content" 
            data-aos="fade-up"
            data-aos-duration="1500"
            >
                {service.serviceData.subTitle && (
                    <h2 className='service-subTitle'>
                        {service.serviceData.subTitle}
                    </h2>
                )}
                <div className="para-container">
                    <p className='service-paragraph'>
                        {service.serviceData.paragraph}
                    </p>
                    <ul className='all-points'>
                        {service.serviceData.points && (
                            Object.values(service.serviceData.points).map((point, index) => (
                                <li 
                                    key={index}
                                    className='point'
                                    data-aos="fade-right"
                                    data-aos-delay={`${index}00`}
                                >
                                    <div className='point-icon'></div>
                                    {point}
                                    {/* <div className="point-box">

                                    </div> */}
                                </li>
                            ))
                        )}
                    </ul>
                    {service.serviceData.title === "Training Services" && (
                        <div className="mt-5">
                            <SecondaryBtn path="/Training">
                                Show More Details
                            </SecondaryBtn>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
