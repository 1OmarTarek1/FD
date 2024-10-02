import { Routes, Route } from 'react-router-dom';
import { HomePage, ServicesPage } from '../../Pages';

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServicesPage />} />
        </Routes>
    );
};

export default WebRoutes;
