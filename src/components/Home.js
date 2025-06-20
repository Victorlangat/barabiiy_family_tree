import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTree } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleViewFamilyTree = () => {
        navigate('/familytree');
    };

    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to the Family Tree Application</h1>
                <p>Unearth Your Roots, Build Your Legacy.</p>
                
            </div>
            
            {/* View Tree Section */}
            <div className="view-tree-section">
                <div className="view-tree-card">
                    <FaTree className="view-tree-icon" />
                    <h2>Explore Your Family Tree</h2>
                    <p>View and interact with your complete family tree</p>
                    <button 
                        className="cta-button view-tree-button" 
                        onClick={handleViewFamilyTree}
                    >
                        View Tree Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;