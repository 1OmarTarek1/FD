import React, { useState, useEffect, useRef } from 'react';
import imgOne from '../../../Assets/2.jpg';
import imgTwo from '../../../Assets/1.jpg';
import imgThree from '../../../Assets/3.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './HeaderCarousel.css';

const carouselData = [
    {
        image: imgOne,
        text: <>
            Lorem ipsum dolor sit amet elit.  Alias odit est eaque labore.
            <font color="red"> Lorem ipsum dolor sit amet elit Alias.</font>
        </>
    },
    {
        image: imgTwo,
        text: <>
            Vivamus laoreet <font color="red"> Nullam tincidunt adipiscing enim.</font> 
            Vivamus laoreet. Nullam tincidunt adipiscing enim.
        </>
    },
    {
        image: imgThree,
        text: <>
            Quisque volutpat condimentum velit. 
            <font color="red"> Class aptent taciti.</font> Quisque volutpat condimentum velit.
        </>
    }
];

const HeaderCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start from 0 for direct indexing
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [fadeOut, setFadeOut] = useState(false); // For paragraph fade-out effect
    const totalSlides = carouselData.length;
    
    const carouselRef = useRef(null);

    // Handle next slide
    const handleNext = () => {
        if (isTransitioning || currentIndex === totalSlides - 1) return; // Stop at last image
        setIsTransitioning(true);
        triggerFadeOut();
        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(false); // Reset transitioning state
        }, 300); // Delay before switching to next slide
    };

    // Handle previous slide
    const handlePrev = () => {
        if (isTransitioning || currentIndex === 0) return; // Stop at first image
        setIsTransitioning(true);
        triggerFadeOut();
        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setIsTransitioning(false); // Reset transitioning state
        }, 300); // Delay before switching to previous slide
    };

    // Trigger carousel transition when currentIndex changes
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = "transform 0.5s ease-in-out";
            carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
            triggerFadeIn(); // Trigger the fade-in effect after transition
        }
    }, [currentIndex]);

    // Trigger fade-out for the paragraph
    const triggerFadeOut = () => {
        setFadeOut(true);
        setTimeout(() => {
            setFadeOut(false); // Reset fade-out after the effect
        }, 250); // Match with the CSS animation duration
    };

    // Trigger fade-in for the paragraph after text is updated
    const triggerFadeIn = () => {
        setTimeout(() => {
            setFadeOut(false); // Make sure fade-out is over before fading in
        }, 250); // Adjust to allow fade-in after transition
    };

    return (
        <div className="imgCarouselWrapper">
            <div className="imgCarousel" ref={carouselRef}>
                {carouselData.map((item, index) => (
                    <img
                        key={index}
                        className="imgCarouselImage"
                        src={item.image}
                        alt={`carousel-${index}`}
                    />
                ))}
            </div>
            <div 
                className="content-wrapper" 
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <p className={`carousel-paragraph ${fadeOut ? 'fade' : ''}`}>
                    {carouselData[currentIndex].text}
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

export default HeaderCarousel;





