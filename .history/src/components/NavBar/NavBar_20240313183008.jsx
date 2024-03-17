import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faPaw, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /><span className="sr-only">Home</span></Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /><span className="sr-only">About</span></Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /><span className="sr-only">Contact</span></Link></li>
        <li><Link to="/pet-rescue"><FontAwesomeIcon icon={faPaw} /><span className="sr-only">Pet Rescue</span></Link></li>
        <li><Link to="/user-area"><FontAwesomeIcon icon={faUserCircle} /><span className="sr-only">User Area</span></Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;