import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src="./logo.png"
            alt="Authentic Maroc Logo"
            className="logo"
          />
          <h1 className="brand-name">
            <span>Authentic</span> Maroc
          </h1>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        <div className="icons-container">
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
          <FaHeart className="icon" />
          <FaGlobe className="icon" />
        </div>
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="#">Catégories</a></li>
          <li><a href="#">Nouveautés</a></li>
          <li><a href="#">Produits</a></li>
          <li><a href="#">Matière premières</a></li>
          <li><a href="#">Coopératives</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
