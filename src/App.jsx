import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import { NavbarSec, FooterSec } from './Sections';
import { ScrollToTop, ToTopBtn, WebRoutes } from './Components';
import './App.css';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <Router basename='FD'>
            <div className="MAIN-WRAPPER">
                <NavbarSec />
                <div className="App">
                        <WebRoutes />
                    <FooterSec />
                    <ToTopBtn />
                </div>      
            </div>
            <ScrollToTop />
        </Router>
    );
}

export default App;