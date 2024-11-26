// src/components/InstructionsModal.jsx
import React from 'react';
import './instructionsModal.css';

const InstructionsModal = ({ show, onClose, title, content }) => {
  if (!show) {
    return null;
  }

  const handleOutsideClick = (e) => {
    if (e.target.className.includes('instructions-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="instructions-modal-overlay" onClick={handleOutsideClick}>
      <div className="instructions-modal">
        <div className="instructions-modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="instructions-modal-close-button">&times;</button>
        </div>
        <div className="instructions-modal-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;
