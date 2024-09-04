import React from 'react';
import './ListeEmbalage.css';

const companies = [
  {
    name: 'Multisac',
    category: 'catégo',
    address: 'description',
    tel: '---'
  },
  {
    name: 'Alfa Pack',
    category: '',
    address: '',
    tel: ''
  },
  {
    name: 'EcoPack',
    category: 'Packaging',
    address: 'Zerktouni, Casablanca',
    tel: '0522...'
  },
  {
    name: 'Global Sac',
    category: 'Sac en papier',
    address: 'Ain Sebaa, Casablanca',
    tel: '0522...'
  },
  {
    name: 'PackSupreme',
    category: 'Matériaux d\'emballage',
    address: 'Centre Ville, Marrakech',
    tel: '0524...'
  },
  {
    name: 'Maroc Pack',
    category: 'Carton',
    address: 'Boulevard Mohammed V, Rabat',
    tel: '0537...'
  }
];

  

const ListeDeCompagnies = () => {
  return (
    <section className="liste-section">
      <div className="background-image">
        <h2 className="section-title">Liste de compagnies d'emballage</h2>
      </div>
      <div className="search-filter-container">
        <select className="filter-select">
          <option value="all">Toutes les catégories</option>
        </select>
        <select className="filter-select">
          <option value="all">Pays</option>
        </select>
        <input className="filter-input" type="text" placeholder="Adresse..." />
        <select className="filter-select">
          <option value="low-to-high">Prix bas ou plus grand</option>
        </select>
        <button className="filter-button">Chercher</button>
      </div>
      <div className="company-list">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <div className="company-category">
              <span>{company.category}</span>
            </div>
            <div className="company-details">
              <h3>{company.name}</h3>
              <p>Catégorie: {company.category}</p>
              <p>Adresse: {company.address}</p>
              <p>Tel: {company.tel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListeDeCompagnies;
