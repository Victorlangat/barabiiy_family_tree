import React from 'react';
import Tree from 'react-d3-tree';
import './FamilyTree.css';

const FamilyTree = ({ familyData }) => {
    console.log('FamilyTree Component Data:', familyData);
    if (!familyData || familyData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="family-tree-container">
            <div className="search-bar">
                <input type="text" placeholder="Search family member..." />
            </div>
            <div className="tree-view">
                {familyData.map((data, index) => (
                    <Tree key={index} data={data} orientation="vertical" pathFunc="elbow" />
                ))}
            </div>
        </div>
    );
};

export default FamilyTree;