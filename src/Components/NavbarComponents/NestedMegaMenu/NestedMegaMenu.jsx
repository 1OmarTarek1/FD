import { NavLink } from 'react-router-dom';
import ServicesData from '../../../Data/ServicesData';
import { useEffect, useRef } from 'react';
import './NestedMegaMenu.css';

const NestedMegaMenu = ({ isMegaMenuOpen, setIsOpen }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const menu = menuRef.current;
        const isMobile = window.innerWidth <= 992; // Check if the screen is mobile size
        if (isMobile) {
            if (isMegaMenuOpen) {
                menu.style.height = 'auto'; // Set height to auto for measurement
                const scrollHeight = menu.scrollHeight; // Get the full height of the content
                menu.style.height = '0px'; // Start at 0px
                setTimeout(() => {
                    menu.style.height = `${scrollHeight}px`; 

                }, 0); // Slight delay for transition
            } else {
                menu.style.height = '0px'; // Collapse the menu
            }
        } else {
            menu.style.height = 'auto';
        }
    }, [isMegaMenuOpen]);

    return (
        <ul ref={menuRef} className={`nested-megaMenu ${isMegaMenuOpen ? 'opened' : ''}`}>
            {ServicesData.map(({ id, icon, txt }) => (
                <li key={id} className="mega-item">
                    <NavLink to={`/Services/${id}`} className="mega-link" onClick={()=>{setIsOpen(false)}}>
                        <div className="item-content">
                            <img src={icon} alt={txt} className="item-icon" />
                            <div className="item-text">{txt}</div>
                        </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NestedMegaMenu;


