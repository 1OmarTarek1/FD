import { FaWhatsapp } from 'react-icons/fa6';
import './WhatsAppBtn.css'





const WhatsAppBtn = () => {
    const phoneNumber = "+201153177510"; // Replace with your WhatsApp number
    const message = "Hello! I would like to contact you."; // Custom message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="vid-btn">
                <FaWhatsapp />
            </button>
        </a>
    )
}

export default WhatsAppBtn