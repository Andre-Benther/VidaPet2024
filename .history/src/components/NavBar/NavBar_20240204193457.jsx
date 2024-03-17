// src/components/NavBar/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Vida Pet</Link>
      <div className="navbar-links">
        <Link to="/about" className="nav-link">Sobre</Link>
        <Link to="/contact" className="nav-link">Contato</Link>
        <Link to="/pet-rescue" className="nav-link">Resgate</Link>
        <Link to="/user-area" className="nav-link">Área do Usuário</Link>
      </div>
    </nav>
  );
}

export default NavBar;
