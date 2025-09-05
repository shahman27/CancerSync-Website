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
        {/* First strand - red */}
        <path
          d="M 125 20 Q 140 60 125 100 Q 110 140 125 180 Q 140 220 125 260 Q 110 300 125 300"
          stroke="#f44336"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Second strand - orange-red */}
        <path
          d="M 75 20 Q 60 60 75 100 Q 90 140 75 180 Q 60 220 75 260 Q 90 300 75 300"
          stroke="#ff5722"
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
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};

export default DNAHelix;
