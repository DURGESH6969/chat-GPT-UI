import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import './App.css';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <SearchBar />
    </div>
  );
}

export default App;
