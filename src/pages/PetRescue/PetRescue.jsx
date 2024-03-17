import React from 'react';
import { FaCamera, FaSave, FaTimesCircle } from 'react-icons/fa';
import './PetRescue.css';
import Camera from './Components/camera';
import Galeria from './Components/galeria';
import Commit from './Components/commit';

function PetRescue() {
  // Aqui você terá lógica para manipular eventos de clique dos botões, etc.

  return (
    <div className="pet-rescue">
      <div className="top-bar">
        {/* Botão para fechar o componente da câmera ou a página atual */}
        <FaTimesCircle className="icon close-icon" />
        <h1 className="title">Pet Rescue</h1>
      </div>
      <div className="camera-view">
        <Camera />
      </div>
      <div className="action-buttons">
        {/* Componentes para galeria e commit podem ter seus próprios botões */}
        <Galeria />
        <Commit />
      </div>
      <div className="footer">
        <button className="camera-btn">
          <FaCamera className="icon" />
          Camera Start
        </button>
        <button className="save-btn">
          <FaSave className="icon" />
          Save
        </button>
      </div>
    </div>
  );
}

export default PetRescue;
