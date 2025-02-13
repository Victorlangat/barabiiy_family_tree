import React, { useState, useEffect } from 'react';
import './App.css';
import './animations.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FamilyTree from './components/FamilyTree';
import Register from './pages/Register';
import Footer from './components/footer'; // Add this import

const App = () => {
    const [familyData, setFamilyData] = useState([]);

    const fetchFamilyTree = async () => {
        try {
            const response = await axios.get('http://localhost:5000/family_tree');
            console.log('Fetched family tree:', response.data);
            setFamilyData(response.data);
        } catch (error) {
            console.error('Error fetching family tree:', error);
        }
    };

    useEffect(() => {
        fetchFamilyTree();
    }, []);

    return (
        <Router>
            <div className="app-container">
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/familytree" element={<FamilyTree key={familyData.length} familyData={familyData} />} />
                        <Route path="/register" element={<Register fetchFamilyTree={fetchFamilyTree} />} />
                    </Routes>
                </main>
                <Footer /> {/* Add Footer here */}
            </div>
        </Router>
    );
};

export default App;