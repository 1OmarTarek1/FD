import { IoArrowForward } from "react-icons/io5";
import './CirPrimaryBtn.css'





const CirPrimaryBtn = () => {
    return (
        <div className="cirPrimary-btn">
            <div className="cirStyle ">
                <div className="priIcon">
                    <span className="arrowBtn arrow-one1">
                        <IoArrowForward />
                    </span>
                    <span className="arrowBtn arrow-two2">
                        <IoArrowForward />
                    </span>
                </div>
            </div>
            <div className="cirStyle bg-cirBtn"></div>
        </div>
    )
}

export default CirPrimaryBtn