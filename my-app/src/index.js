import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/'
import About from './pages/about/a-propos'
import Error from './pages/error/error-page'
import Logement from './pages/fiche-logement/logement'
import Header from './components/Header'


ReactDOM.render(
  <React.StrictMode>
        <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="./a-propos" element={<About />} />
              <Route path="/error" element={<Error />} />
              <Route path="./fiche-logement" element={<Logement />} />
          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
  )

