import React from 'react';
import './CooperativePage.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const CooperativePage = () => {
  return (
    <div className="cooperative-page">
      {/* Left section with category image and info */}
      <div className="left-section">
        <div className="category-image">
          <div className="category-label">nom de cat</div>
          <div className="image-placeholder">image de coop</div>
        </div>

        <div className="info-section">
          <h3>Nos informations:</h3>
          <ul>
            <li>Email: <a href="mailto:info@coop.com">info@coop.com</a></li>
            <li>Téléphone: <a href="tel:+212600000000">+212 600 000 000</a></li>
            <li>Adresse: Rabat, Maroc</li>
          </ul>
          
          <h3>Nos réseaux sociaux:</h3>
          <ul className="social-media">
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedin /></li>
          </ul>
        </div>
                {/* Form section at the bottom */}
                <div className="form-section">
          <h3>Envoyer un commentaire à cette coopérative:</h3>
          <form className="comment-form">
            <div className="form-group">
              <label>Nom*</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Message*</label>
              <textarea name="message" rows="3" required></textarea>
            </div>
            <div className="form-group">
              <label>Image</label>
              <input type="file" name="image" />
            </div>
            <button type="submit" className="submit-button">Envoyer</button>
          </form>
        </div>
      </div>

      {/* Right section with presentation, products and materials */}
      <div className="right-section">
        <div className="presentation">
          <h3>Présentation:</h3>
          <p>-------------------------------------------</p>
          <p>-------------------------------------------</p>
          <p>-------------------------------------------</p>
        </div>

        <div className="products">
          <h3>Nos produits:</h3>
          <div className="product-list">
            <div className="product-card">
              <div className="product-image-placeholder"></div>
              <p>nom de produit</p>
            </div>
            <div className="product-card">
              <div className="product-image-placeholder"></div>
              <p>nom de produit</p>
            </div>
            <div className="product-card">
              <div className="product-image-placeholder"></div>
              <p>nom de produit</p>
            </div>
            <div className="product-card">
              <div className="product-image-placeholder"></div>
              <p>nom de produit</p>
            </div>
          </div>
        </div>

        <div className="materials">
          <h3>Nos matières premières:</h3>
          <div className="materials-list">
            <div className="material-card"></div>
            <div className="material-card"></div>
            <div className="material-card"></div>
            <div className="material-card"></div>
            <div className="material-card"></div>
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default CooperativePage;
