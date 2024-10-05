import React, { useEffect, useState } from 'react';
import './TrainingPage.css';

// API URLs
const TRAINING_API_URL = 'http://127.0.0.1:8000/AllTrianings/';
const SERVICE_API_URL = 'http://127.0.0.1:8000/AllServices/';

const TrainingPage = () => {
    // State to hold training data and service data
    const [trainings, setTrainings] = useState([]);
    const [service, setService] = useState({ bgImg: '', txt: '' });

    // Fetch both training and service data
    useEffect(() => {
        // Fetch Training Data
        const fetchTrainings = async () => {
            try {
                const response = await fetch(TRAINING_API_URL);
                const data = await response.json();
                setTrainings(data);  // Assuming `data` is an array of trainings
            } catch (error) {
                console.error('Error fetching trainings:', error);
            }
        };

        // Fetch Service Data (for bgImg and txt)
        const fetchService = async () => {
            try {
                const response = await fetch(SERVICE_API_URL);
                const data = await response.json();
                console.log('Full Service Data:', data);  // Log the full API response
        
                // Find the service where txt is "Training Services"
                const trainingService = data.find(item => item.txt === "Training Services");
                console.log('Training Service:', trainingService);  // Log the result
                
                if (trainingService) {
                    setService({
                        bgImg: trainingService.bgImg,
                        txt: trainingService.txt
                    });
                } else {
                    console.warn('No service found with the txt "Training Services"');
                }
            } catch (error) {
                console.error('Error fetching service data:', error);
            }
        };
        
        

        fetchTrainings();
        fetchService();
    }, []);

    return (
        <div className='training-page'>
            <div className="training-header">
                <img
                    src={service.bgImg} // Use bgImg from service
                    alt="training"
                    className="training-bgImg"
                />
                <div className="lierEffectImg"></div>
                <div className="img-content"
                    data-aos={"fade-up"}
                    data-aos-duration="600"
                >
                    <h1 className='training-title'>
                        {service.txt} {/* Use txt from service */}
                    </h1>
                </div>
            </div>

            {/* Training Section */}
            <div className="training-section">
                <ul className="allTraining">
                    {/* Map through the trainings data */}
                    {trainings.map((training, index) => (
                        <li className="theTrain" key={training.id} data-aos={"fade-up"} data-aos-delay={`${index}00`}>
                            <h2 className="train-title">
                                {training.title}
                            </h2>
                            <ul className="train-points">
                                {/* Assuming pointsData is an array of strings */}
                                {training.pointsData && training.pointsData.map((point, index) => (
                                    <li className="train-point" key={index}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TrainingPage;


