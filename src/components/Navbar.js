import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Catégories</li>
        <li>Nouveautés</li>
        <li>Produits</li>
        <li>Matière premières</li>
        <li>Coopératives</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
