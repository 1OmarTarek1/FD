import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BackendLink } from '../../../Components';
import './NewsHeaderSec.css';

const NewsHeaderSec = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [carouselData, setCarouselData] = useState([]); // Initialize carouselData
    const totalSlides = carouselData.length;
    
    const carouselRef = useRef(null);

    // Fetch news data from server
    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch(`${BackendLink}/AllNews/`);
                const data = await response.json();
                
                // Filter for important news
                const importantNews = data.filter(news => news.important);
                setCarouselData(importantNews);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNewsData();
    }, []);

    const handleNext = () => {
        if (isTransitioning || currentIndex === totalSlides - 1) return; // Stop at last image
        setIsTransitioning(true);
        triggerFadeOut();
        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isTransitioning || currentIndex === 0) return; // Stop at first image
        setIsTransitioning(true);
        triggerFadeOut();
        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setIsTransitioning(false);
        }, 300);
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = "transform 0.5s ease-in-out";
            carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
            triggerFadeIn();
        }
    }, [currentIndex]);

    const triggerFadeOut = () => {
        setFadeOut(true);
        setTimeout(() => {
            setFadeOut(false);
        }, 250);
    };

    const triggerFadeIn = () => {
        setTimeout(() => {
            setFadeOut(false);
        }, 250);
    };

    return (
        <div className="imgCarouselWrapper">
            <div className="imgCarousel" ref={carouselRef}>
                {carouselData.map((item, index) => (
                    <div key={index} 
                         className="carouselSlide" 
                         style={{ backgroundImage: `url(${item.image})` }}>
                        {/* Remove the <img> tag, just use background */}
                    </div>
                ))}
            </div>
            <div 
                className="content-wrapper" 
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <p className={`carousel-paragraph ${fadeOut ? 'fade' : ''}`}>
                    {carouselData[currentIndex] && carouselData[currentIndex].title}
                </p>
                <div className="carousel-buttons">
                    <button className="carousel-btn btn-right" onClick={handlePrev} disabled={currentIndex === 0}>
                        <IoIosArrowBack />
                    </button>
                    <button className="carousel-btn btn-left" onClick={handleNext} disabled={currentIndex === totalSlides - 1}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsHeaderSec;
