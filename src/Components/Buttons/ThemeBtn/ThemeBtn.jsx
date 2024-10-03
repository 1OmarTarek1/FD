import React from 'react';
import { useTheme } from '../../Providers/ThemeProvider/ThemeProvider';
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from 'react-icons/io';
import './ThemeBtn.css';

const ThemeBtn = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme function from context

    return (
        <div className={`theme-btn ${theme === 'dark' && 'darkActive'}`}  onClick={toggleTheme}>
            <span className="theme-icon moon"><IoMoon /></span>
            <span className="theme-icon sun"><IoIosSunny /></span>
        </div>
    );
};

export default ThemeBtn;
