import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './attracCard.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const AttracCard = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Payment submitted successfully!');
      navigate('/'); // Navigate to the home page after successful payment
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container">
        <div className="payment-section">
          <h2>Check and pay</h2>
          <p>How do you want to pay?</p>
          <div className="payment-methods">
            <div className="payment-method">
              <input type="radio" id="new-card" name="payment-method" defaultChecked />
              <label htmlFor="new-card">
                <div className="method-card">
                  <div className="card-icon" />
                  <p>New card</p>
                </div>
              </label>
            </div>
            <div className="payment-method">
              <input type="radio" id="paypal" name="payment-method" />
              <label htmlFor="paypal">
                <div className="method-card">
                  <div className="paypal-icon" />
                  <p>PayPal</p>
                </div>
              </label>
            </div>
          </div>
          <form className="payment-form" onSubmit={handleSubmit}>
            <h3>New card</h3>
            <div className="card-images">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/unionpay.svg" alt="UnionPay" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/diners.svg" alt="Diners Club" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg" alt="Discover" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg" alt="JCB" />
            </div>
            <div className="form-group">
              <label htmlFor="cardholder-name">Cardholder's name *</label>
              <input type="text" id="cardholder-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Card number *</label>
              <input type="text" id="card-number" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiration-date">Expiration date *</label>
              <div className="expiration-date">
                <input type="text" id="expiration-date" placeholder="MM/YY" required />
                <input type="text" id="cvc" placeholder="CVC" required />
              </div>
            </div>
            <button className="complete-booking-button" type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Complete booking'}
            </button>
          </form>
        </div>
        <div className="summary-section">
          <div className="tour-summary">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/339705138.jpg?k=68e85dd20a041b7c4c7360eb8966bbbcd7dce7dac5093dc6aff2cb47020929bf&o=" alt="Tour" />
            <h4>3 Hours Private Tour in Nubian Village from Aswan</h4>
            <p>Mon, Jul 8 08:00 AM</p>
          </div>
          <div className="price-summary">
            <p>1 x 3 Hours Private Tour in Nubian Village from Aswan</p>
            <p>1 x Adult (age 11–99)</p>
            <p>EGP 4,741.24</p>
            <h4>Total price</h4>
            <p>EGP 4,741.24</p>
            <p>Local currency (US Dollar)</p>
            <p>Includes taxes and fees</p>
            <p>US$98</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttracCard;
