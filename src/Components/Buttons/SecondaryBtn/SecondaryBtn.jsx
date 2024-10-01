import { IoArrowForward } from "react-icons/io5";
import './SecondaryBtn.css'





const SecondaryBtn = (props) => {
    return (
        <div className="secondary-btn" >
            <div className="arrow-wrapper">
                <span className='btn-Icon btn-Icon-1'>
                    <IoArrowForward />
                    
                </span>
                <span className='btn-Icon btn-Icon-2'>
                    <IoArrowForward />
                </span>
            </div>
            <span style={{marginLeft:"15px"}}>
                {props.children}
            </span>
        </div>
    )
}

export default SecondaryBtn