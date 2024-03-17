// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';  // Importa o componente Home
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PetRescue from './pages/PetRescue/PetRescue';
import UserArea from './pages/UserArea/UserArea';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pet-rescue" element={<PetRescue />} />
        <Route path="/user-area" element={<UserArea />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
