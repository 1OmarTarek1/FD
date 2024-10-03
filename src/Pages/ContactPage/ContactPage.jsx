import contact from '../../Assets/Images/contactBg.jpg'
import './ContactPage.css'
import { ContactUsSec } from '../../Sections';



const ContactPage = () => {
    return (
        <div className='contact-page'>

            <div className="contact-header" 
            >
                <img 
                    src={contact} 
                    alt="contact" 
                    className="contact-bgImg" 
                />
                <div className="lierEffectImg"></div>
                <div className="img-content" 
                data-aos={"fade-up"}
                data-aos-duration="600"
                >
                    <h1 className='contact-title'>
                        Contact Us
                        <br />
                        Your Feedback 
                        <font color="red"> Matters!</font>
                    </h1>
                </div>
            </div>

            <ContactUsSec />

        </div>
    )
}

export default ContactPage