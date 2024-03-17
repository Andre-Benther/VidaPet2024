import React from 'react';
import './Home.css';

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

export default Home;
