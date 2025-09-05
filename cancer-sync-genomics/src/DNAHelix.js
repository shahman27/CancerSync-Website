import React from 'react';
import './DNAHelix.css';

const DNAHelix = () => {
  return (
    <div className="dna-container">
      <div className="dna-helix">
        <div className="dna-strand strand-1"></div>
        <div className="dna-strand strand-2"></div>
      </div>
    </div>
  );
};

export default DNAHelix;
