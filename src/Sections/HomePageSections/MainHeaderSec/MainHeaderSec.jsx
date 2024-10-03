import './MainHeaderSec.css';
import bgVideo from '../../../Assets/Videos/bgVid.mp4';
import { FaWhatsapp } from 'react-icons/fa6';

const MainHeaderSec = () => {
    const phoneNumber = "+201150745430"; // Replace with your WhatsApp number
    const message = "Hello! I would like to contact you."; // Custom message

    // WhatsApp link format
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className='MainHeaderSec'>
            <video 
                src={bgVideo} 
                autoPlay 
                loop 
                muted 
                className='bg-video'
            />
            <div className="vid-titleWrapper">
                <h1 className="vid-title" 
                data-aos={"fade-up"}
                data-aos-duration={"400"}
                >
                    First Distinctive Company
                </h1>
                <div className='vid-dis' 
                data-aos={"fade-up"}
                data-aos-duration={"400"}
                >
                    Oil & Gas Services
                </div>
                <div className=""
                    data-aos={"fade-up"}
                    data-aos-duration={"400"}
                    data-aos-delay={"500"}
                >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <button className="vid-btn" >
                            <FaWhatsapp />
                            Send Message
                        </button>
                    </a>
                </div>
            </div>
            <div className="gas-price">
                <div className="price">
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        lineHeight:"1.2rem",
                        
                    }}>
                        <span style={{
                            fontSize:"14px",
                            fontWeight:"600",
                            color:"var(--color-primary)"
                        }}>COP</span>
                        <div style={{
                            display:"flex",
                            gap:"10px"
                        }}>
                            <span style={{
                                fontWeight:"700",
                                fontSize:"20px",
                                color:"var(--font-mainColor)"
                            }}>109.16</span>
                            <span style={{
                                fontSize:"14px",
                                color:"var(--color-primary)",
                                fontWeight:"500",
                            }}>-0.21 -0.19%</span>
                        </div>
                    </div>
                </div>
                <div className="date" style={{
                    display:"flex",
                    flexDirection:"column",
                    lineHeight:"1.3",
                    fontWeight:"300",
                    fontSize:"13px",
                    color:"var(--font-mainColor)"
                }}>
                    <span>NYSE 10/02/2024</span>
                    <span>1:27 PM EDT</span>
                </div>
            </div>
        </div>
    );
};

export default MainHeaderSec;
