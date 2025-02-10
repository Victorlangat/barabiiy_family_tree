import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTree, FaUserPlus, FaNetworkWired } from 'react-icons/fa'; // Import icons
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
                <button className="cta-button" onClick={handleViewFamilyTree}>
                    View Family Tree
                </button>
            </div>
            <div className="features-section">
                <div className="feature-card">
                    <FaTree className="feature-icon" /> {/* Tree icon */}
                    <h3>Create Family Tree</h3>
                    <p>Build your family tree from scratch.</p>
                </div>
                <div className="feature-card">
                    <FaUserPlus className="feature-icon" /> {/* User-plus icon */}
                    <h3>Add Members</h3>
                    <p>Easily add new family members.</p>
                </div>
                <div className="feature-card">
                    <FaNetworkWired className="feature-icon" /> {/* Network icon */}
                    <h3>Explore Relationships</h3>
                    <p>Discover connections between family members.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;