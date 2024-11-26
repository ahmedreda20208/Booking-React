import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './profilePriva.css';
import { Link } from 'react-router-dom';

const ProfilePriva = () => {
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
            <li><Link to="/ppriv" className="active">Privacy</Link></li>
            <li><Link to="/pemail">Email notifications</Link></li>
            <li><Link to="/pother">Other travelers</Link></li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Privacy</h2>
          <p>Exercise your privacy rights and control how your data is used.</p>
          <div className="privacy-info">
            <div className="privacy-info-item">
              <span className="privacy-info-label">Privacy settings</span>
              <div className="privacy-info-details">
                <span className="privacy-info-value">rhodad5994@gmail.com</span>
                <p>Select "Manage" to change your privacy settings and exercise your rights using our request form.</p>
              </div>
              <a href="#" className="privacy-info-edit">Manage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePriva;
