import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css'; 
import App from './App.jsx';
import './App.css'
import { ThemeProvider } from './Components/Providers/ThemeProvider/ThemeProvider.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <ThemeProvider>
        <Router>
            <App />
        </Router>
    </ThemeProvider>
);