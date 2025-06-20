// Update NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Barabiiy</Link>
                <div 
                    className="mobile-menu-icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <FaBars />
                </div>
                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/familytree" className="nav-links">Family Tree</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-links">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;