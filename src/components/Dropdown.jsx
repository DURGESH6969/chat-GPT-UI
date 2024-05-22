import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ChatGPT <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <div className="item-header">
              <span>⭐ ChatGPT Plus</span>
              <button className="upgrade-button">Upgrade</button>
            </div>
            <p className="item-description">Our smartest model & more</p>
          </div>
          <div className="dropdown-item selected">
            <span>⚙️ ChatGPT</span>
            <p className="item-description">Great for everyday tasks</p>
          </div>
          <div className="dropdown-item">
            <span>🔄 Temporary chat</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
