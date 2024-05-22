import React from 'react';
import './Header.css';
import Dropdown from './Dropdown.jsx';
const Header = () => {
  return (
    <header className="header">
     <Dropdown />
      <div className="user-icon">DG</div>
    </header>
  );
};

export default Header;
