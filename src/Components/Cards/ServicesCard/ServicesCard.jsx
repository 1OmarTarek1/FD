import { NavLink } from "react-router-dom";
import { CirPrimaryBtn } from "../../../Components";
import './ServicesCard.css';

const ServicesCard = ({ id, image, icon, text, pagePath }) => {
    return (
        <NavLink to={`/services/${id}`} className="service-cardLink">
            <img src={image} alt={text} className="bg-cardImg" />
            <div className="service-content">
                <img src={icon} className="service-icon" alt="service-icon" />
                <div className="text">{text}</div>
                <CirPrimaryBtn />
            </div>
        </NavLink>
    );
};

export default ServicesCard;

