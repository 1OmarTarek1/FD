import React, { useState, useEffect } from 'react';
import './GasPriceCom.css';

const GasPriceCom = () => {
    // State for current date and time
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    // State for gas and oil prices
    const [prices, setPrices] = useState({
        WTI_Crude: 'Loading...',
        Brent_Crude: 'Loading...',
        Natural_Gas: 'Loading...',
    });

    // Function to fetch prices
    const fetchPrices = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/oil-price/'); // Updated API endpoint
            const data = await response.json();

            // Assuming the API returns data in the format with WTI_Crude, Brent_Crude, and Natural_Gas
            setPrices({
                WTI_Crude: data.WTI_Crude,
                Brent_Crude: data.Brent_Crude,
                Natural_Gas: data.Natural_Gas,
            });
        } catch (error) {
            console.error('Error fetching prices:', error);
            setPrices({
                WTI_Crude: 'Error',
                Brent_Crude: 'Error',
                Natural_Gas: 'Error',
            });
        }
    };

    // Update the date and time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Fetch prices initially and then every minute
        fetchPrices(); // Fetch prices on mount
        const priceIntervalId = setInterval(fetchPrices, 60000); // Update prices every minute

        // Clean up intervals on component unmount
        return () => {
            clearInterval(intervalId);
            clearInterval(priceIntervalId);
        };
    }, []);

    return (
        <div className="gas-price">
            <div className="price">
                <div className="price-details">
                    <span className="price-title">WTI</span>
                    <div className="price-value">
                        <span className="value">{prices.WTI_Crude}</span>
                    </div>
                </div>
            </div>
            <div className="price">
                <div className="price-details">
                    <span className="price-title">Brent</span>
                    <div className="price-value">
                        <span className="value">{prices.Brent_Crude}</span>
                    </div>
                </div>
            </div>
            <div className="price">
                <div className="price-details">
                    <span className="price-title">N Gas</span>
                    <div className="price-value">
                        <span className="value">{prices.Natural_Gas}</span>
                    </div>
                </div>
            </div>
            <div className="date">
                <span className="date-text">{currentDateTime.toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}</span>
                <span className="time-text">{currentDateTime.toLocaleTimeString('en-US')}</span>
            </div>
        </div>
    );
};

export default GasPriceCom;
