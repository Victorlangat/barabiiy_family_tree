import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        fatherName: '', // Added field for father's name
        motherName: '', // Added field for mother's name
        spouseName: '', // Added field for spouse's name
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fatherName">Father's Name</label>
                        <input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="Enter your father's name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="motherName">Mother's Name</label>
                        <input
                            type="text"
                            id="motherName"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            placeholder="Enter your mother's name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spouseName">Spouse's Name</label>
                        <input
                            type="text"
                            id="spouseName"
                            name="spouseName"
                            value={formData.spouseName}
                            onChange={handleChange}
                            placeholder="Enter your spouse's name (if applicable)"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;