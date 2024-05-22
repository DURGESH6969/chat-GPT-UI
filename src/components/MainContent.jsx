import React from 'react';
import Card from './Card';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="logo-placeholder">
        <span className="logo-icon">⚙️</span>
      </div>
      <div className="cards">
        <Card icon="📝" text="Create a workout plan" />
        <Card icon="🌏" text="Experience Seoul like a local" />
        <Card icon="💡" text="Write a story in my favorite genre" />
        <Card icon="📸" text="Pick outfit to look good on camera" />
      </div>
    </main>
  );
};

export default MainContent;
