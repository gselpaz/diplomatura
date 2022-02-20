// import logo from './logo.svg';

import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import ProyectosPage from './pages/ProyectosPage';
import NovedadesPage from './pages/NovedadesPage';
import NosotrosPage from './pages/NosotrosPage';

// import { Router } from 'react-router';

function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/nosotros" exact element={<NosotrosPage />} />
        <Route path="/proyectos" exact element={<ProyectosPage />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<ContactoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
