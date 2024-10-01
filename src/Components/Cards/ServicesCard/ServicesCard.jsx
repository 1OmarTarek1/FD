import { Link } from "react-router-dom";
import './ServicesCard.css'
import { CirPrimaryBtn } from "../../../Components";

const ServicesCard = ({ image, icon, text, pagePath }) => {
    return (
        <Link to={pagePath} className="service-cardLink">
            <img src={image} alt={text} className="bg-cardImg"/>
            <div className="service-content">
                <img src={icon} className="service-icon" alt="service-icon" />
                <div className="text">{text}</div>
                <CirPrimaryBtn />
            </div>
        </Link>
    )
}

export default ServicesCard;
