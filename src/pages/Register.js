import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    house: '',
    fatherName: '',
    motherName: '',
    username: '',
    phone: '',
    spouse: '',
    hasSpouse: null,
    hasChildren: false,
    children: ['']
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSpouseDropdown, setShowSpouseDropdown] = useState(false);
  const houseOptions = ['Tikambo', 'Kipkones', 'Nairobi', 'Kimasit', 'Samuel'];
  const spouseOptions = ['Has Spouse', 'No Spouse'];
  const navigate = useNavigate();

  const handleHouseChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      house: prev.house === value ? '' : value
    }));
  };

  const handleSpouseStatusChange = (value) => {
    const hasSpouse = value === 'Has Spouse';
    setFormData({
      ...formData,
      hasSpouse,
      spouse: '',
      hasChildren: false,
      children: ['']
    });
    setShowSpouseDropdown(false);
  };

  const handleChildrenChange = (index, value) => {
    const newChildren = [...formData.children];
    newChildren[index] = value;
    setFormData({ ...formData, children: newChildren });
  };

  const addChildField = () => {
    setFormData({ ...formData, children: [...formData.children, ''] });
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSpouseDropdown = () => setShowSpouseDropdown(!showSpouseDropdown);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/familytree');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Family Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* House Dropdown */}
            <div className="form-group dropdown-container">
              <label>House:</label>
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  className="dropdown-button"
                  onClick={toggleDropdown}
                >
                  {formData.house || 'Select One House'}
                </button>
                {showDropdown && (
                  <div className="checkbox-options">
                    {houseOptions.map(option => (
                      <label key={option} className="checkbox-label">
                        <input
                          type="radio"
                          name="house"
                          value={option}
                          checked={formData.house === option}
                          onChange={handleHouseChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Username */}
            <div className="form-group">
              <label>
                Your Name:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
                <small>Format: 07******** or 01********</small>
              </label>
            </div>

            {/* Parent Names */}
            <div className="input-group">
              <div className="form-group">
                <label>
                  Father's Name:
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  Mother's Name:
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>

            {/* Spouse Status Dropdown */}
            <div className="form-group dropdown-container">
              <label>Spouse Status:</label>
              <div className="dropdown-wrapper">
                <button
                  type="button"
                  className="dropdown-button"
                  onClick={toggleSpouseDropdown}
                >
                  {formData.hasSpouse === null
                    ? 'Select Spouse Status'
                    : formData.hasSpouse ? 'Has Spouse' : 'No Spouse'}
                </button>
                {showSpouseDropdown && (
                  <div className="checkbox-options">
                    {spouseOptions.map(option => (
                      <label key={option} className="checkbox-label">
                        <input
                          type="radio"
                          name="spouseStatus"
                          checked={
                            (option === 'Has Spouse' && formData.hasSpouse) ||
                            (option === 'No Spouse' && formData.hasSpouse === false)
                          }
                          onChange={() => handleSpouseStatusChange(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Conditional Spouse Name Input */}
            {formData.hasSpouse && (
              <>
                <div className="form-group">
                  <label>
                    Spouse Name:
                    <input
                      type="text"
                      name="spouse"
                      value={formData.spouse}
                      onChange={handleChange}
                      required
                      placeholder="Enter spouse's name"
                    />
                  </label>
                </div>

                {/* Children Section */}
                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.hasChildren}
                      onChange={(e) => setFormData({ ...formData, hasChildren: e.target.checked })}
                    />
                    Do you have children?
                  </label>
                </div>

                {formData.hasChildren && (
                  <div className="children-input-group">
                    {formData.children.map((child, index) => (
                      <div key={index} className="form-group">
                        <label>
                          Child {index + 1} Name:
                          <input
                            type="text"
                            value={child}
                            onChange={(e) => handleChildrenChange(index, e.target.value)}
                            placeholder="Enter child's name"
                          />
                        </label>
                      </div>
                    ))}
                    <div className="add-child-link" onClick={addChildField}>
                      + Add another child
                    </div>
                  </div>
                )}
              </>
            )}

            <button type="submit" className="submit-button">
              Register Family
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;