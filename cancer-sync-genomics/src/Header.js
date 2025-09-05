import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <div className="logo">
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