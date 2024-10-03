import { ContactFormCom, OfficeLocationCom } from "../../../Components";
import './ContactUsSec.css';

const ContactUsSec = () => {
    return (
        <>
            <div className="form-wrapper" >
                <h1 className="text-center mb-5" data-aos={"fade-up"}>
                    Contact Us
                </h1>

                <div className="contact-contentWrapper">
                    <ContactFormCom />
                    <OfficeLocationCom />
                </div>
            </div>
        </>
    );
};

export default ContactUsSec;

