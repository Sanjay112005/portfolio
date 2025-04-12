import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="nav">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      {/* Sidebar for small screens */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Portfolio</h2>
        <nav className="sidebar-links">
          <Link to="/" className="btn " onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="btn" onClick={toggleMenu}>About</Link>
          <Link to="/projects" className="btn" onClick={toggleMenu}>Projects</Link>
          <Link to="/resume" className="btn" onClick={toggleMenu}>Resume</Link>
          <Link to="/contact" className="btn" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>

      {/* Top navbar for large screens */}
      <div className="container desktop-nav">
        <Link to="/" className="btn">Home</Link>
        <Link to="/about" className="btn">About</Link>
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/resume" className="btn">Resume</Link>
        <Link to="/contact" className="btn">Contact</Link>

        <svg className="outline" overflow="visible" width={400} height={60}>
          <rect className="rect" x={0} y={0} width={650} height={60} fill="transparent" strokeWidth={0} />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
