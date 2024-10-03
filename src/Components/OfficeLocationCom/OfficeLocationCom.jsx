import { IoLocationOutline } from "react-icons/io5";
import './OfficeLocationCom.css'




const OfficeLocationCom = () => {
    return (
            <div className="office-wrapper">
            <div className="office-item head-office"
                data-aos="fade-up"
            >
                <h3 className="officeItem-title">
                    <IoLocationOutline />
                    Head office 
                </h3>
                <p className="officeItem-para">
                    5 Grognet Street
                    Mosta MST 3613
                    MALTA
                </p>
            </div>
            <div className="office-item regional-office"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <h3 className="officeItem-title">
                    <IoLocationOutline />
                    Regional office 
                </h3>
                <p className="officeItem-para">
                    Libya
                    Alseraj, Tripoli 
                </p>
            </div>
            <div className="office-item regional-office"
                data-aos="fade-up"
                data-aos-delay="500"
            >
                <h3 className="officeItem-title">
                    <IoLocationOutline />
                    Regional office 
                </h3>
                <p className="officeItem-para">
                    Egypt 
                    Madine naser 
                    Cairo
                </p>
            </div>
        </div>
    )
}

export default OfficeLocationCom