import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <div className="logo">
                    <div className="logo-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" className="logo-svg">
                            <circle cx="20" cy="20" r="18" fill="#ff5722" stroke="#f44336" strokeWidth="2"/>
                            <g fill="#f44336">
                                {/* Family icon */}
                                <circle cx="12" cy="12" r="2"/>
                                <circle cx="20" cy="10" r="2.5"/>
                                <circle cx="28" cy="12" r="2"/>
                                <path d="M 12 14 Q 20 16 28 14" stroke="#f44336" strokeWidth="1" fill="none"/>
                                {/* DNA helix */}
                                <path d="M 15 20 Q 18 22 15 24 Q 12 26 15 28" stroke="#f44336" strokeWidth="1.5" fill="none"/>
                                <path d="M 25 20 Q 22 22 25 24 Q 28 26 25 28" stroke="#f44336" strokeWidth="1.5" fill="none"/>
                                <line x1="15" y1="22" x2="25" y2="22" stroke="#f44336" strokeWidth="1"/>
                                <line x1="15" y1="26" x2="25" y2="26" stroke="#f44336" strokeWidth="1"/>
                            </g>
                        </svg>
                    </div>
                    <h2>CancerSync Genomics</h2>
                </div>
                <nav className="nav-menu">
                    <a href="#about">About</a>
                    <a href="#technology">Technology</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;