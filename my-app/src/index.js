import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/';
import About from './pages/about/apropos';
import Error from './pages/error/error-page';
import Logement from './pages/fiche-logement/logement';
import Header from './components/Header';
const app = document.getElementById('app');
const root = createRoot(app);
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="/logement" element={<Logement />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
