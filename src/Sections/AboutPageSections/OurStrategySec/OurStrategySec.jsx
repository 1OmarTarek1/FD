import React, { useState } from 'react';
import './OurStrategySec.css'


const strategyData =[
    {
        text:"Innovation",
        title:"Innovation & Technology",
        paragraph:"We prioritize the integration of advanced technologies and digital solutions to enhance efficiency and reduce operational risks. By staying at the forefront of industry innovations, we ensure our clients have access to the latest tools and methodologies, improving performance across all stages of the oil services lifecycle.",
    },
    {
        text:"Sustainability",
        title:"Sustainability & Environmental Responsibility",
        paragraph:"As a responsible player in the energy sector, we are committed to minimizing our environmental impact. Our strategy focuses on implementing sustainable practices and eco-friendly solutions, reducing carbon footprints, and contributing to the global transition toward cleaner energy.",
    },
    {
        text:"Client-Centric",
        title:"Client-Centric Approach",
        paragraph:"Our client's success is at the heart of our strategy. We work closely with each client to understand their unique challenges and provide tailored solutions that drive efficiency, safety, and value. Building long-term, trust-based partnerships is central to our approach.",
    },
    {
        text:"Excellence",
        title:"Operational Excellence",
        paragraph:"By continually refining our processes, maintaining strict safety standards, and enhancing our logistical capabilities, we deliver reliable, high-quality services that meet and exceed industry benchmarks. Our commitment to operational excellence ensures the seamless execution of every project we undertake.",
    },
    {
        text:"Expansion",
        title:"Global Expansion & Diversification",
        paragraph:"We are focused on expanding our footprint in key markets worldwide, including energy. By diversifying our service offerings and exploring new business opportunities, we aim to strengthen our position as a global leader in oil services.",
    },
    {
        text:"Talent",
        title:"Talent Development & Empowerment",
        paragraph:"Our people are our greatest asset. We invest in the continuous development and training of our workforce, empowering them to lead with expertise, innovation, and integrity. Building a culture of collaboration and excellence is key to our sustained growth.",
    },
]

const OurStrategySec = () => {
    const [selectedStrategy, setSelectedStrategy] = useState(strategyData[0]); // Default to the first strategy
    const [fade, setFade] = useState(false);

    const handleButtonClick = (strategy) => {
        setFade(true); // Trigger fade out
        setTimeout(() => {
            setSelectedStrategy(strategy);
            setFade(false); // Trigger fade in after changing the strategy
        }, 300); // Match this duration with the CSS transition duration
    };
    return (
        <div className="ourStrategy-wrapper">
            <h2 className="ourStrategy-title"
                data-aos="fade-up"
            >Our Strategy</h2>
            <div className="strategy-data">
                <ul className="strategy-btns">
                    {strategyData.map((strategy, index) => (
                        <div className="li-wrapper"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={`${index}00`}
                        >
                            <li 
                                className={`strategy-btn ${selectedStrategy.text === strategy.text ? 'active' : ''}`} 
                                onClick={() => handleButtonClick(strategy)} 
                            >
                                {strategy.text}
                            </li>
                        </div>
                    ))}
                </ul>
                <div className="strategy-content"
                    data-aos="fade-up"
                >
                    <div className={`strategyPara-title ${fade ? 'fade-out' : 'fade-in'}`}>
                        {selectedStrategy.title}
                    </div>
                    <p className={`strategy-paragraph ${fade ? 'fade-out' : 'fade-in'}`}>
                        {selectedStrategy.paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurStrategySec