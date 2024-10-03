import { Routes, Route } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, ProjectsPage, ServicesPage } from '../../Pages';

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Services/:ServiceId" element={<ServicesPage />} />
            <Route path="/Projects" element={<ProjectsPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contact" element={<ContactPage />} />
        </Routes>
    );
};

export default WebRoutes;
