import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './profileEmail.css';
import { Link } from 'react-router-dom';

const ProfileEmail = () => {
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
            <li><Link to="/pemail" className="active">Email notifications</Link></li>
            <li><Link to="/pother">Other travelers</Link></li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Email notifications</h2>
          <p>Decide what you want to be notified about, and unsubscribe from what you don't.</p>
          <div className="email-info">
            <div className="email-info-item">
              <span className="email-info-label">Email preferences</span>
              <div className="email-info-details">
                <span className="email-info-value">ahmedreda888qq@gmail.com</span>
                <p>This is the email address you use to sign in. It's also where we send your booking confirmations.</p>
              </div>
              <a href="#" className="email-info-edit">Manage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEmail;
