import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './profileRef.css';
import { Link } from 'react-router-dom';

const ProfileRef = () => {
  const [isEditing, setIsEditing] = useState({
    currency: false,
    language: false,
    accessibility: false,
  });

  const [preferencesData, setPreferencesData] = useState({
    currency: 'EGP Egyptian pound',
    language: 'American English',
    accessibility: false,
  });

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleInputChange = (field, value) => {
    setPreferencesData({ ...preferencesData, [field]: value });
  };

  const handleSaveClick = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleCancelClick = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  return (
    <div>
      <Navbar hideAuthButtons={true} />
    <div className="preferences-container">
      <div className="preferences-sidebar">
        <ul>
          <li><Link to="/manage">Personal details</Link></li>
          <li><Link to="/pref" className="active">Preferences</Link></li>
          <li><Link to="/psec">Security</Link></li>
          <li><Link to="/ppay">Payment details</Link></li>
          <li><Link to="/ppriv">Privacy</Link></li>
          <li><Link to="/pemail">Email notifications</Link></li>
          <li><Link to="/pother">Other travelers</Link></li>
        </ul>
      </div>
      <div className="preferences-content">
        <h2>Preferences</h2>
        <p>Change your language, currency, and accessibility requirements.</p>
        <div className="preferences-info">
          <div className="preferences-info-item">
            <span className="preferences-info-label">Currency</span>
            {isEditing.currency ? (
              <div className="preferences-info-editing">
                <select
                  value={preferencesData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option value="EGP Egyptian pound">EGP Egyptian pound</option>
                  <option value="USD US Dollar">USD US Dollar</option>
                  <option value="EUR Euro">EUR Euro</option>
                  {/* Add more currencies as needed */}
                </select>
                <button onClick={() => handleSaveClick('currency')} className="preferences-info-save">Save</button>
                <button onClick={() => handleCancelClick('currency')} className="preferences-info-cancel">Cancel</button>
              </div>
            ) : (
              <>
                <span className="preferences-info-value">{preferencesData.currency}</span>
                <a href="#" onClick={() => handleEditClick('currency')} className="preferences-info-edit">Edit</a>
              </>
            )}
          </div>

          <div className="preferences-info-item">
            <span className="preferences-info-label">Language</span>
            {isEditing.language ? (
              <div className="preferences-info-editing">
                <select
                  value={preferencesData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                >
                  <option value="American English">American English</option>
                  <option value="British English">British English</option>
                  <option value="Spanish">Spanish</option>
                  {/* Add more languages as needed */}
                </select>
                <button onClick={() => handleSaveClick('language')} className="preferences-info-save">Save</button>
                <button onClick={() => handleCancelClick('language')} className="preferences-info-cancel">Cancel</button>
              </div>
            ) : (
              <>
                <span className="preferences-info-value">{preferencesData.language}</span>
                <a href="#" onClick={() => handleEditClick('language')} className="preferences-info-edit">Edit</a>
              </>
            )}
          </div>

          <div className="preferences-info-item">
            <span className="preferences-info-label">Accessibility requirements</span>
            {isEditing.accessibility ? (
              <div className="preferences-info-editing">
                <input
                  type="checkbox"
                  checked={preferencesData.accessibility}
                  onChange={(e) => handleInputChange('accessibility', e.target.checked)}
                /> Only show accessible properties
                <button onClick={() => handleSaveClick('accessibility')} className="preferences-info-save">Save</button>
                <button onClick={() => handleCancelClick('accessibility')} className="preferences-info-cancel">Cancel</button>
              </div>
            ) : (
              <>
                <span className="preferences-info-value">
                  {preferencesData.accessibility ? 'Only show accessible properties' : 'No accessibility requirements'}
                </span>
                <a href="#" onClick={() => handleEditClick('accessibility')} className="preferences-info-edit">Edit</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileRef;
