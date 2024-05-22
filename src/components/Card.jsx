import React from 'react';
import './Card.css';

const Card = ({ icon, text }) => {
  return (
    <div className="card">
      <span className="icon">{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default Card;
