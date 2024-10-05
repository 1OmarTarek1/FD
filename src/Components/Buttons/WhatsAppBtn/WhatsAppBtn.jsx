import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import './WhatsAppBtn.css';

const WhatsAppBtn = () => {
    const phoneNumber = "+201153177510"; // Replace with your WhatsApp number
    const message = "Hello! I would like to contact you."; // Custom message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const [buttonStyle, setButtonStyle] = useState({ bottom: '10px' }); // Default position

    useEffect(() => {
        const handleScroll = () => {
            // Check if the window width is less than or equal to 500px
            if (window.innerWidth <= 500) {
                if (window.scrollY > 200) {
                    setButtonStyle({ bottom: '10px' }); // Keep at 10px from bottom when scrolled
                } else {
                    setButtonStyle({ bottom: '80px' }); // Position when scrolled up
                }
            }
        };

        // Initial check to set the button style
        handleScroll(); 

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll); // Update on window resize
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="vid-btn" style={{ position: 'fixed', right: '10px', ...buttonStyle }}>
                <FaWhatsapp />
            </button>
        </a>
    );
};

export default WhatsAppBtn;
