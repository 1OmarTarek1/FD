import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import './SecondaryBtn.css'





const SecondaryBtn = (props) => {
    return (
        <Link to={props.path} className="secondary-btn" data-aos={"fade"}>
            <div className="arrow-wrapper">
                <span className='btn-Icon btn-Icon-1'>
                    <IoArrowForward />
                    
                </span>
                <span className='btn-Icon btn-Icon-2'>
                    <IoArrowForward />
                </span>
            </div>
            <span style={{marginLeft:"15px", transition:"all .3s ease"}}>
                {props.children}
            </span>
        </Link>
    )
}

export default SecondaryBtn