// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
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



function Home() {
    return (
        <div className="home-container">

            <main>
                <section className="hero">
                    <h1>Bem-vindo ao VidaPet</h1>
                    <p>Ajude a encontrar um lar amoroso para cada pet.</p>
                </section>
                <div className="section-overlay">
                    <section id="about" className="about">
                        <h2>Sobre o VidaPet</h2>
                        <p>Conectamos pets resgatados a pessoas amorosas que querem adotar um novo amigo.</p>
                    </section>
                    <section id="pets" className="pets-gallery">
                        <h2>Pets para Adoção</h2>
                        <div className="gallery">
                            {/* Aqui entrariam os componentes dos pets */}
                        </div>
                    </section>
                    <section className="success-stories">
                        <h2>Histórias de Sucesso</h2>
                        <p>Leia as incríveis histórias de pets e seus novos donos.</p>
                    </section>
                </div>
            </main>
            <footer className="footer">
                <p>&copy; 2024 VidaPet. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}



export default App;
