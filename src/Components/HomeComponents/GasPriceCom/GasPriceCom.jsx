import React, { useState, useEffect } from 'react';
import './GasPriceCom.css'





const GasPriceCom = () => {
    // State for current date and time
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    // State for gas and oil prices
    const [prices, setPrices] = useState({ gas: 'Loading...', oil: 'Loading...' });

    // Function to fetch prices
    const fetchPrices = async () => {
        try {
            const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
            const data = await response.json();

            // Assuming the API returns data in a format with gas and oil prices
            setPrices({ gas: data.gasPrice, oil: data.oilPrice });
        } catch (error) {
            console.error('Error fetching prices:', error);
            setPrices({ gas: 'Error', oil: 'Error' });
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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "1.2rem",
                }}>
                    <span style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--color-primary)"
                    }}>Gas</span>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <span style={{
                            fontWeight: "700",
                            fontSize: "20px",
                            color: "var(--font-mainColor)"
                        }}>{prices.gas}</span>
                    </div>
                </div>
            </div>
            <div className="price">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "1.2rem",
                }}>
                    <span style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--color-primary)"
                    }}>Oil</span>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <span style={{
                            fontWeight: "700",
                            fontSize: "20px",
                            color: "var(--font-mainColor)"
                        }}>{prices.oil}</span>
                    </div>
                </div>
            </div>
            <div className="date" style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.3",
                fontWeight: "300",
                fontSize: "13px",
                color: "var(--font-mainColor)"
            }}>
                <span>{currentDateTime.toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}</span>
                <span>{currentDateTime.toLocaleTimeString('en-US')}</span>
            </div>
        </div>
    )
}

export default GasPriceCom