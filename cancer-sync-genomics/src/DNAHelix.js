import React from 'react';
import './DNAHelix.css';

const DNAHelix = () => {
  // Generate base pairs at regular intervals
  const basePairs = [];
  for (let i = 0; i < 8; i++) {
    const y = 40 + i * 30;
    const x1 = 100 + Math.sin(i * 0.8) * 25; // First strand position
    const x2 = 100 - Math.sin(i * 0.8) * 25; // Second strand position
    basePairs.push({ y, x1, x2 });
  }

  return (
    <div className="dna-container">
      <svg width="200" height="300" viewBox="0 0 200 300" className="dna-helix">
        {/* First strand - reddish pink */}
        <path
          d="M 125 20 Q 140 60 125 100 Q 110 140 125 180 Q 140 220 125 260 Q 110 300 125 300"
          stroke="url(#strand1Gradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Second strand - cyan blue */}
        <path
          d="M 75 20 Q 60 60 75 100 Q 90 140 75 180 Q 60 220 75 260 Q 90 300 75 300"
          stroke="url(#strand2Gradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Base pairs - connections between strands */}
        {basePairs.map((bp, index) => (
          <line
            key={index}
            x1={bp.x1}
            y1={bp.y}
            x2={bp.x2}
            y2={bp.y}
            stroke="url(#basePairGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="strand1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="50%" stopColor="#ff8fab" />
            <stop offset="100%" stopColor="#ff6b9d" />
          </linearGradient>
          <linearGradient id="strand2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#40e0ff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <linearGradient id="basePairGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DNAHelix;
