import React from 'react';
import './ListeLivraison.css';

const companies = [
  {
    name: "ARRUBA SERVICES",
    popularity: "Populaire",
    country: "Maroc",
    address: "Hay Riad, Rabat",
    phone: "067...",
  },
  {
    name: "AMERICANO LIVRAIRIE",
    popularity: "",
    country: "Maroc",
    address: "Agdal, Rabat",
    phone: "065...",
  },
  {
    name: "ALFA DISTRIBUTION",
    popularity: "Populaire",
    country: "Maroc",
    address: "Maarif, Casablanca",
    phone: "062...",
  },
  {
    name: "MULTI PACK SERVICES",
    popularity: "",
    country: "Maroc",
    address: "Gueliz, Marrakech",
    phone: "064...",
  },
  {
    name: "ATLAS SUPPLIES",
    popularity: "Populaire",
    country: "Maroc",
    address: "Ain Diab, Casablanca",
    phone: "068...",
  },
  {
    name: "MAGHREB LOGISTICS",
    popularity: "",
    country: "Maroc",
    address: "Hassan, Rabat",
    phone: "066...",
  },
];


const ListeDeCompagnies = () => {
  return (
    <section className="liste-section">
      <div className="background-image">
        <h2 className="section-title">Liste de Compagnies de Livraison </h2>
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
