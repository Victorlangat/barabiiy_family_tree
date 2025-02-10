import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Barabiiy</Link>
                <ul className="nav-menu">
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