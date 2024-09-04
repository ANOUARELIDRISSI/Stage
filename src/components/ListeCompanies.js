import React from 'react';
import './ListeCompanies.css';

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
        <h2 className="section-title">Liste des coopératives</h2>
      </div>

      {/* Search filter section */}
      <div className="search-filter-container">
        <input className="filter-input" type="text" placeholder="Mot clé" />
        <select className="filter-select">
          <option value="all">Choisir une ville</option>
        </select>
        <select className="filter-select">
          <option value="all">Toutes les catégories</option>
        </select>
        <select className="filter-select">
          <option value="cert1">Premier Certificat</option>
        </select>
        <select className="filter-select">
          <option value="cert2">Deuxième Certificat</option>
        </select>
        <select className="filter-select">
          <option value="cert3">Troisième Certificat</option>
        </select>
        <button className="filter-button">Rechercher</button>
      </div>

      {/* List of companies */}
      <div className="company-list">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <div className="company-category">
              <span>{company.category ? company.category : 'Nom de la catégorie'}</span>
            </div>
            <div className="company-details">
              <h3>{company.name ? company.name : 'Nom de coopérative'}</h3>
              <p><strong>Catégorie:</strong> {company.category ? company.category : 'nom de la catégorie'}</p>
              <p><strong>Ville:</strong> {company.address ? company.address.split(",")[1] : 'nom de ville'}</p>
              <p><strong>Adresse:</strong> {company.address ? company.address : 'description'}</p>
              <p><strong>Tel:</strong> {company.tel ? company.tel : '---'}...<a href="#">Voir plus</a></p>
            </div>
          </div>
        ))}
      </div>

      {/* Voir plus button */}
      <div className="voir-plus-container">
        <button className="voir-plus-button">Voir plus</button>
      </div>
    </section>
  );
};

export default ListeDeCompagnies;
