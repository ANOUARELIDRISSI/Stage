import React from 'react';

import ListeDeCompagnies from './AI/chatbot';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <ListeDeCompagnies />
    </div>
  );
}

export default App;