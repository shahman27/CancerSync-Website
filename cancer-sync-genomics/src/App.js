// src/App.js
import React from 'react';
import Header from './Header';
import DNAHelix from './DNAHelix';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="landing-page">
        <div className="hero-section">
          <h1 className="company-name">CancerSync Genomics</h1>
          <p className="tagline">Revolutionizing Cancer Research Through Advanced Genomics</p>
          
          <DNAHelix />
          
          <div className="coming-soon">
            <h2>Coming Soon</h2>
            <p>We're building the future of cancer genomics. Stay tuned for groundbreaking innovations.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;