import { NavLink } from "react-router-dom";
import { CirPrimaryBtn } from "../../../Components";
import './ServicesCard.css';

const ServicesCard = ({ id, image, text, pagePath }) => {
    return (
        <NavLink to={`/Services/${id}`} className="service-cardLink">
            <img src={image} alt={text} className="bg-cardImg" />
            <div className="service-content">
                <div className="text">{text}</div>
                <CirPrimaryBtn />
            </div>
        </NavLink>
    );
};

export default ServicesCard;

