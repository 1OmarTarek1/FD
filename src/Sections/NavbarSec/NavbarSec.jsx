import React, { useState, useRef, useEffect } from 'react';
import Headroom from 'react-headroom';
import { NavMenuBtn, TertiaryBtn } from '../../Components';
import logoImg from '../../Assets/logoNav.png';
import { IoArrowForward } from "react-icons/io5";
import './NavbarSec.css';

const NavbarSec = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage open/close
    const menuRef = useRef(null); // Ref for the menu
    const iconRef = useRef(null); // Ref for the menu icon


    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    // Close the menu when clicking outside of it
    const handleClickOutside = (event) => {
        // Check if the click was outside the menu and icon
        if (
            menuRef.current && !menuRef.current.contains(event.target) && 
            iconRef.current && !iconRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the menu
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Headroom>
            <div className='nav-container'>
                <nav className='the-nav'>
                    <a href='#!' className="logo">
                        <img src={logoImg} alt="logo" className='logo-img' />
                    </a>
                    <NavMenuBtn 
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                    iconRef={iconRef}
                    />
                    <ul className={`webLinks ${isOpen ? 'open' : ''}`} ref={menuRef}>
                        <a href="#!" className="web-link">
                            <li className="link-wrapper">
                                Services
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </a>
                        <a href="#!" className="web-link">
                            <li className="link-wrapper">
                                Projects
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </a>
                        <a href="#!" className="web-link">
                            <li className="link-wrapper">
                                About Us
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </a>
                        <a href="#!" className="web-link">
                            <li className="link-wrapper">
                                Contact Us
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </a>
                        <div className="btn-wrapper">
                            <TertiaryBtn>Send Message</TertiaryBtn>
                        </div>
                    </ul>
                </nav>
            </div>
        </Headroom>
    );
};

export default NavbarSec;
