import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/'
import About from './pages/about/apropos'
import Error from './pages/error/error-page'
import Logement from './pages/fiche-logement/logement'
import Banner from './components/Banner'


ReactDOM.render(
  <React.StrictMode>
        <Router>
          <Banner />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apropos" element={<About />} />
              <Route path="*" element={<Error />} />
              <Route path="/logement" element={<Logement />} />
          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
  )

