import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './model.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');
    if (!hasModalBeenShown) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem('modalShown', 'true');
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome to Travelmania</h2>
            <p>You need to register or log in to access all protections, take advantage of our sales, and be able to book on our site.</p>
            <Link 
              to="/register" 
              className="modal-button"
              onClick={closeModal}
            >
              Register or Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
