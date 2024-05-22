import React from 'react';
import './SearchBar.css'; // Import your CSS file

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="message ChatGPT" />
      <button className="text-search">
        {/* Magnifying glass icon */}
        ⬆️
      </button>
    </div>
  );
};

export default SearchBar;
