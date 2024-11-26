import React from 'react';
import './profileSec.css';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const ProfileSec = () => {
  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="security-container">
        <div className="security-sidebar">
          <ul>
            <li><Link to="/manage">Personal details</Link></li>
            <li><Link to="/pref">Preferences</Link></li>
            <li><Link to="/psec" className="active">Security</Link></li>
            <li><Link to="/ppay">Payment details</Link></li>
            <li><Link to="/ppriv">Privacy</Link></li>
            <li><Link to="/pemail">Email notifications</Link></li>
            <li><Link to="/pother">Other travelers</Link></li>
          </ul>
        </div>
        <div className="security-content">
          <h2>Security</h2>
          <p>Change your security settings, set up secure authentication, or delete your account.</p>
          <div className="security-info">
            <div className="security-info-item">
              <span className="security-info-label">Password</span>
              <span className="security-info-value">Reset your password regularly to keep your account secure</span>
              <a href="#" className="security-info-edit">Reset</a>
            </div>
            <div className="security-info-item">
              <span className="security-info-label">Two-factor authentication</span>
              <span className="security-info-value">Increase your account's security by setting up two-factor authentication.</span>
              <a href="#" className="security-info-edit">Set up</a>
            </div>
            <div className="security-info-item">
              <span className="security-info-label">Active sessions</span>
              <span className="security-info-value">Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</span>
              <a href="#" className="security-info-edit">Sign out</a>
            </div>
            <div className="security-info-item">
              <span className="security-info-label">Delete account</span>
              <span className="security-info-value">Permanently delete your Booking.com account</span>
              <a href="#" className="security-info-edit">Delete account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSec;


