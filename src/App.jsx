import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import { NavbarSec } from './Sections';
import { ScrollToTop, ToTopBtn, WebRoutes } from './Components';
import './App.css';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <Router basename='FDC'>
            <NavbarSec />
            <div className="App">
                    <WebRoutes />
                {/* <FooterSec /> */}
                <ToTopBtn />
            </div>      
            <ScrollToTop />
        </Router>
    );
}

export default App;