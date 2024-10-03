import './NavMenuBtn.css'





const NavMenuBtn = ({ isOpen, toggleMenu, iconRef }) => {
    return (
        <div className="btnTheme-wrapper">        
            <div 
            className={`menu-icon ${isOpen && 'open'}`} 
            onClick={toggleMenu}
            ref={iconRef}
            >
                <span className="icon-line line-top"></span>
                <span className="icon-line line-mid"></span>
                <span className="icon-line line-bott"></span> 
            </div>
        </div>
    )
}

export default NavMenuBtn