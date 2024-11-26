import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faSignOutAlt, faUserCircle, faSuitcase, faGift, faWallet, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { isAuthenticated } from '../../components/utilis/Utilis'; // Adjust the path according to your project structure

const Navbar = ({ hideAuthButtons }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const authenticated = isAuthenticated();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    setTimeout(() => {
      navigate('/');
    }, 200); // 2 seconds delay before navigating to home page
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigation = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 200); // 200 ms delay before navigating
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><Link to='/'>Travelmania</Link></span>
        <div className="navItems">
          {authenticated && (
            <div className="profileMenu">
              <button className="navButton" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faUser} /> Profile <FontAwesomeIcon icon={faCaretDown} />
              </button>
              {dropdownOpen && (
                <div className="dropdownMenu">
                  <Link to="/profile" className="dropdownItem">
                    <FontAwesomeIcon icon={faUserCircle} /> Manage account
                  </Link>
                  <Link to="/booktrip" className="dropdownItem">
                    <FontAwesomeIcon icon={faSuitcase} /> Booking & Trips
                  </Link>
                
                  <Link to="/bookwall" className="dropdownItem">
                    <FontAwesomeIcon icon={faWallet} /> Rewards & Wallet
                  </Link>
                  <Link to="/bookriw" className="dropdownItem">
                    <FontAwesomeIcon icon={faStar} /> Reviews
                  </Link>
                  <Link to="/booksave" className="dropdownItem">
                    <FontAwesomeIcon icon={faHeart} /> Saved
                  </Link>
                  <button onClick={handleLogout} className="dropdownItem">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sign out
                  </button>
                </div>
              )}
            </div>
          )}
          {!hideAuthButtons && !authenticated && (
            <>
              <button 
                className="navButton" 
                onClick={() => handleNavigation('/register')}
              >
                Register
              </button>
              <button 
                className="navButton" 
                onClick={() => handleNavigation('/login')}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
