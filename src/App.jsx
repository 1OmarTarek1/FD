import { useEffect, useState } from 'react';
import AOS from 'aos';
import { NavbarSec, FooterSec } from './Sections';
import { DynamicTitle, ScrollToTop, ToTopBtn, WebRoutes, Loading } from './Components';
import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            ) : (
                <>                
                    <div className="MAIN-WRAPPER">
                        <NavbarSec />
                        <div className="App">
                            <WebRoutes />
                            <FooterSec />
                            <ToTopBtn />
                        </div>
                    </div>
                    <ScrollToTop />
                    <DynamicTitle />
                </>
            )}
        </>
    );
}

export default App;
