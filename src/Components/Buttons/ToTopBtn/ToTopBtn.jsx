
import { useState } from 'react';
import { IoArrowUp } from "react-icons/io5";
import './ToTopBtn.css'




const ToTopBtn = () => {
    //START scroll to top page button
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if      ( scrolled > 700  ) { setVisible( true  )} 
        else if ( scrolled <= 700 ) { setVisible( false )}
        };
    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) };
    window.addEventListener('scroll', toggleVisible);
    //END scroll to top page button
    return (
        <>
            <button 
            className  =  'arrow-btn' 
            onClick    =  {scrollToTop} 
            style      =  {{bottom: visible ? '3%' : '-50px'}}>
                <div className="lines-wrapper">
                    <span className="line line-1">
                        <IoArrowUp />
                    </span>
                    <span className="line line-2">
                        <IoArrowUp />
                    </span>
                </div>
            </button>
        </>
    )
}

export default ToTopBtn