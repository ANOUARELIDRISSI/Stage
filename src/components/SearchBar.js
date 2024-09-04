import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <select>
        <option>Toutes les catégories</option>
      </select>
      <select>
        <option>Pays</option>
      </select>
      <input type="text" placeholder="Adresse..." />
      <select>
        <option>Prix bas ou plus grand</option>
      </select>
      <button>Chercher</button>
    </div>
  );
};

export default SearchBar;
