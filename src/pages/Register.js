import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ fetchFamilyTree }) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [father, setFather] = useState('');
    const [mother, setMother] = useState('');
    const [hasSpouse, setHasSpouse] = useState(false);
    const [spouse, setSpouse] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !dob) {
            setError('Name and Date of Birth are required');
            return;
        }

        await axios.post('http://localhost:5000/add_member', {
            name,
            dob,
            father,
            mother,
            spouse: hasSpouse ? spouse : null,
            phone
        });

        fetchFamilyTree(); // Fetch the updated family tree
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
            <input type="text" placeholder="Father's Name" value={father} onChange={(e) => setFather(e.target.value)} />
            <input type="text" placeholder="Mother's Name" value={mother} onChange={(e) => setMother(e.target.value)} />
            
            <label>
                <input type="radio" checked={hasSpouse} onChange={() => setHasSpouse(true)} />
                Has Spouse
            </label>
            <label>
                <input type="radio" checked={!hasSpouse} onChange={() => setHasSpouse(false)} />
                No Spouse
            </label>

            {hasSpouse && (
                <input type="text" placeholder="Spouse's Name" value={spouse} onChange={(e) => setSpouse(e.target.value)} />
            )}

            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;