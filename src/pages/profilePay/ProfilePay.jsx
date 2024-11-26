import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './profilePay.css';
import { Link } from 'react-router-dom';

const ProfilePay = () => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: ''
  });

  const handleAddCardClick = () => {
    setIsAddingCard(true);
  };

  const handleCancelClick = () => {
    setIsAddingCard(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const handleSaveClick = () => {
    console.log('Saved data:', paymentData);
    setIsAddingCard(false);
    // Here you can add the logic to save the data to your backend or local storage
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
            <li><Link to="/ppay" className="active">Payment details</Link></li>
            <li><Link to="/ppriv">Privacy</Link></li>
            <li><Link to="/pemail">Email notifications</Link></li>
            <li><Link to="/pother">Other travelers</Link></li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Payment details</h2>
          <p>Securely add or remove payment methods to make it easier when you book.</p>
          <div className="payment-info">
            <div className="payment-info-item">
              <span className="payment-info-label">Payment cards</span>
              <span className="payment-info-value">Pay with new card</span>
              <a href="#" className="payment-info-edit" onClick={handleAddCardClick}>Add card</a>
            </div>
            {isAddingCard && (
              <div className="payment-card-form">
                <div className="payment-card-header">
                  <span>Your payment details are secure</span>
                  <a href="#" className="payment-card-more-details">More details</a>
                </div>
                <div className="payment-card-icons">
                  <img src="https://via.placeholder.com/30" alt="card icon" />
                  <img src="https://via.placeholder.com/30" alt="card icon" />
                  <img src="https://via.placeholder.com/30" alt="card icon" />
                  {/* Add more icons as needed */}
                </div>
                <div className="payment-card-field">
                  <label>Cardholder's name *</label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={paymentData.cardholderName}
                    onChange={handleInputChange}
                    placeholder="Cardholder's name"
                  />
                </div>
                <div className="payment-card-field">
                  <label>Card number *</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Card number"
                  />
                </div>
                <div className="payment-card-field">
                  <label>Expiration date *</label>
                  <input
                    type="text"
                    name="expirationDate"
                    value={paymentData.expirationDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="payment-card-buttons">
                  <button onClick={handleCancelClick} className="payment-card-cancel">Cancel</button>
                  <button onClick={handleSaveClick} className="payment-card-save">Save</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePay;
