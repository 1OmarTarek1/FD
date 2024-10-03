import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Headroom from 'react-headroom';
import { NavMenuBtn, NestedMegaMenu, ThemeBtn } from '../../Components';
import logoImg from '../../Assets/Images/logoNav.png';
import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowForward } from 'react-icons/io';
import './NavbarSec.css';

const NavbarSec = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); 
    const menuRef = useRef(null); 
    const iconRef = useRef(null); 
    const location = useLocation(); 


    // Toggle nav menu
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
        setIsMegaMenuOpen(false);
    };

    // Toggle mega menu and close the main menu
    const toggleMegaMenu = () => {
        // setIsOpen(false); // Close main menu
        setIsMegaMenuOpen(prevState => !prevState);
    };


    // Close the menus when clicking outside
    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) && 
            iconRef.current && !iconRef.current.contains(event.target) 
        ) {
            setIsOpen(false);
            setIsMegaMenuOpen(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close the menu after clicking a link
    const closeMenu = () => {
        setIsOpen(false);
        setIsMegaMenuOpen(false); 
    };

    const isServicesActive = location.pathname.includes("services");


    return (
        <Headroom>
            <div className='nav-container'>
                <nav className='the-nav'>
                    <NavLink to='/' className="logo-wrapper">
                        <div className="logo">
                            <img src={logoImg} alt="logo" className='logo-img' />
                        </div>
                        <div className="company-name">
                            <div className="name">
                                FD Energies
                            </div>
                            <div className="description">
                                Oil & Gas Services
                            </div>
                        </div>
                    </NavLink>

                    <NavMenuBtn 
                        isOpen={isOpen}
                        toggleMenu={toggleMenu}
                        iconRef={iconRef}
                    />

                    <ul className={`webLinks ${isOpen ? 'open' : ''}`} ref={menuRef}>
                        <NavLink to="/" className="web-link" onClick={closeMenu}>
                            <li className="link-wrapper">
                                Home
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </NavLink>
                        <div className={`web-link nest-wrapper ${isMegaMenuOpen || isServicesActive ? 'active' : ''}`}
                        onClick={toggleMegaMenu} 
                        style={{cursor: "pointer"}}
                        >
                            <li className="link-wrapper">
                                Services
                                <span className={`link-arrow nested-arrow ${isMegaMenuOpen && 'opened'}`}>
                                    <IoIosArrowForward />
                                </span>
                            </li>
                            <NestedMegaMenu 
                                isMegaMenuOpen={isMegaMenuOpen}
                                setIsOpen={setIsOpen}
                            />
                        </div>
                        <NavLink to="/Projects" className="web-link" onClick={closeMenu}>
                            <li className="link-wrapper">
                                Projects
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to="/About" className="web-link" onClick={closeMenu}>
                            <li className="link-wrapper">
                                About Us
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to="/Contact" className="web-link" onClick={closeMenu}>
                            <li className="link-wrapper">
                                Contact Us
                                <span className='link-arrow'>
                                    <IoArrowForward />
                                </span>
                            </li>
                        </NavLink>
                    </ul>

                    <div className="btn-wrapper">
                        <ThemeBtn />
                    </div>
                </nav>
            </div>
        </Headroom>
    );
};


export default NavbarSec;
