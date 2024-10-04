import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import './NestedMegaMenu.css';

const NestedMegaMenu = ({ isMegaMenuOpen, setIsOpen }) => {
    const [servicesData, setServicesData] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const fetchServicesData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/AllServices/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setServicesData(data); // Store fetched data in state
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServicesData();
    }, []);

    useEffect(() => {
        const menu = menuRef.current;
        if (!menu) return; // Early return if the ref is not attached

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

    // Loading and error handling
    if (loading) {
        return <div>Loading...</div>; // Optionally, show a loading spinner
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if fetch fails
    }

    return (
        <ul ref={menuRef} className={`nested-megaMenu ${isMegaMenuOpen ? 'opened' : ''}`}>
            {servicesData.map(({ id, txt }) => (
                <li key={id} className="mega-item">
                    <NavLink to={`/Services/${id}`} className="mega-link" onClick={() => { setIsOpen(false); }}>
                        <div className="item-content">
                            <IoMdCheckmarkCircleOutline size={20} color='var(--color-primary)' />
                            <div className="item-text ">{txt}</div>
                        </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NestedMegaMenu;



