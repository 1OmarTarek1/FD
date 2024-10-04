import about from '../../../Assets/Images/aboutUs.jpg'
import './AboutHeaderSec.css'




const AboutHeaderSec = () => {
    return (
        <div className="about-header" 
        >
            <img 
                src={about} 
                alt="about" 
                className="about-bgImg" 
            />
            <div className="lierEffectImg"></div>
            <div className="img-content" 
            data-aos={"fade-up"}
            data-aos-duration="600"
            >
                <h1 className='about-title'>
                    Your competent partner for more
                    than <font color="red">15 years</font> .
                </h1>
        </div>
        </div>
    )
}

export default AboutHeaderSec