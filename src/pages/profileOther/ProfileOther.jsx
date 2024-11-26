import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './profileOther.css';
import { Link } from 'react-router-dom';

const ProfileOther = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [travelerData, setTravelerData] = useState({
    firstName: '',
    lastName: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    gender: '',
    authorized: false,
  });

  const handleInputChange = (field, value) => {
    setTravelerData({ ...travelerData, [field]: value });
  };

  const handleSaveClick = () => {
    console.log("Saved traveler data:", travelerData);
    // Add logic to save data, e.g., send to API
    setIsAdding(false);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
  };

  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="profile-container">
        <div className="profile-sidebar">
          <ul>
            <li><Link to="/manage">Personal details</Link></li>
            <li><Link to="/pref">Preferences</Link></li>
            <li><Link to="/psec">Security</Link></li>
            <li><Link to="/ppay">Payment details</Link></li>
            <li><Link to="/ppriv">Privacy</Link></li>
            <li><Link to="/pemail">Email notifications</Link></li>
            <li><Link to="/pother" className="active">Other travelers</Link></li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Other travelers</h2>
          <p>Add or edit info about the people you're traveling with.</p>
          {!isAdding ? (
            <button className="add-traveler-button" onClick={() => setIsAdding(true)}>+ Add new traveler</button>
          ) : (
            <div className="traveler-form">
              <div className="form-group">
                <label>First name(s)</label>
                <input
                  type="text"
                  value={travelerData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last name(s)</label>
                <input
                  type="text"
                  value={travelerData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date of birth</label>
                <select
                  value={travelerData.dobMonth}
                  onChange={(e) => handleInputChange('dobMonth', e.target.value)}
                  required
                >
                  <option value="">Month</option>
                  {/* Add all months */}
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <input
                  type="text"
                  value={travelerData.dobDay}
                  onChange={(e) => handleInputChange('dobDay', e.target.value)}
                  placeholder="DD"
                  required
                />
                <input
                  type="text"
                  value={travelerData.dobYear}
                  onChange={(e) => handleInputChange('dobYear', e.target.value)}
                  placeholder="YYYY"
                  required
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  value={travelerData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  checked={travelerData.authorized}
                  onChange={(e) => handleInputChange('authorized', e.target.checked)}
                />
                <label>
                  I confirm that I’m authorized to provide the personal data of any co-traveler (including children) to Booking.com for this service. In addition, I confirm that I’ve informed the other travelers that I’m providing their personal data to Booking.com.
                </label>
              </div>
              <div className="form-buttons">
                <button onClick={handleSaveClick} className="save-button">Save</button>
                <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileOther;
