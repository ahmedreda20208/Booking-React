import React from 'react';
import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faShieldAlt, faLanguage, faMoneyBillWave, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="user-container">
        <h2 className="user-title">Account settings</h2>
        <p className="user-subtitle">Manage your Travelmania.com experience</p>
        <div className="user-grid">
          <div className="user-card">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <div className="user-card-content">
              <h3>Personal details</h3>
              <p>Update your info and find out how it's used.</p>
              <Link to="/manage">Manage personal details</Link>
            </div>
          </div>
          <div className="user-card">
            <FontAwesomeIcon icon={faShieldAlt} className="user-icon" />
            <div className="user-card-content">
              <h3>Security</h3>
              <p>Change your security settings, set up secure authentication, or delete your account.</p>
              <Link to="/psec">Manage account security</Link>
            </div>
          </div>
          <div className="user-card">
            <FontAwesomeIcon icon={faLanguage} className="user-icon" />
            <div className="user-card-content">
              <h3>Preferences</h3>
              <p>Change your language, currency, and accessibility requirements.</p>
              <Link to="/ppriv">Manage preferences</Link>
            </div>
          </div>
          <div className="user-card">
            <FontAwesomeIcon icon={faMoneyBillWave} className="user-icon" />
            <div className="user-card-content">
              <h3>Payment details</h3>
              <p>Securely add or remove payment methods to make it easier when you book.</p>
              <Link to="/ppay">Manage payment details</Link>
            </div>
          </div>
          <div className="user-card">
            <FontAwesomeIcon icon={faEnvelope} className="user-icon" />
            <div className="user-card-content">
              <h3>Email notifications</h3>
              <p>Decide what you want to be notified about and unsubscribe from what you don't.</p>
              <Link to="/pemail">Manage notifications</Link>
            </div>
          </div>
          <div className="user-card">
            <FontAwesomeIcon icon={faUsers} className="user-icon" />
            <div className="user-card-content">
              <h3>Other travelers</h3>
              <p>Add or edit info about the people you're traveling with.</p>
              <Link to="/pother">Manage travelers</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
