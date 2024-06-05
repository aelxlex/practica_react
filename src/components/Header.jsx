import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import nbalogo from '../imagenes/nbalogo.png';

const Header = () => (
  <header className="header">
    <img src={nbalogo} alt="Logo" className="logo" />
    <nav className="nav">
      <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/image1">CELTICS</Link></li>
        <li><Link to="/image2">BUCKS</Link></li>
        <li><Link to="/image3">LAKERS</Link></li>
        <li><Link to="/image4">RAPTORS</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

