import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './carPayment.css';

const CarPayment = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    country: 'egypt',
    cardHolderName: '',
    cardNumber: '',
    expirationDate: '',
    cvc: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!form.email) errors.email = 'Email is required';
    if (!form.firstName) errors.firstName = 'First name is required';
    if (!form.lastName) errors.lastName = 'Last name is required';
    if (!form.contactNumber) errors.contactNumber = 'Contact number is required';
    if (!form.cardHolderName) errors.cardHolderName = 'Cardholder name is required';
    if (!form.cardNumber) errors.cardNumber = 'Card number is required';
    if (!form.expirationDate) errors.expirationDate = 'Expiration date is required';
    if (!form.cvc) errors.cvc = 'CVC is required';

    return errors;
  };

  const handleBookNow = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      // Simulate an async operation like an API call
      setTimeout(() => {
        setLoading(false);
        alert('Booking Confirmed');
        navigate('/'); // Redirect to home page after confirmation
      }, 2000); // 2 seconds delay
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" isFlight={true} />
      <div className="payment-container">
        <div className="summary-section">
          <div className="summary-header">
            <div>
              <h3>Cairo International Airport</h3>
              <p>Thu, Jun 27, 2024, 10:00</p>
            </div>
            <div className="arrow">→</div>
            <div>
              <h3>Marsa Alam International Airport</h3>
              <p>Sun, Jun 30, 2024, 10:00</p>
            </div>
          </div>
          <h2>Checkout</h2>
          <p>Next... Confirmation</p>
          <div className="alert-box">
            <p>What if my plans change?</p>
            <p>You'll get a full refund if you cancel at least 48 hours before pick-up.</p>
          </div>
          <div className="car-summary">
            <div className="car-summary-header">
              <span className="top-pick">Top Pick</span>
              <h3>Nissan Sunny <span>or similar small car</span></h3>
            </div>
            <ul className="car-features">
              <li>5 seats</li>
              <li>1 Large bag</li>
              <li>1 Small bag</li>
              <li>Automatic</li>
              <li>450 km per rental</li>
            </ul>
            <p>Cairo International Airport - In Terminal</p>
            <p>Marsa Alam International Airport - In Terminal</p>
            <div className="car-company">
              <div className="rating">
                <span className="rating-score">6.8</span> OK <span className="review-count">300 + reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="details-section">
          <h3>Main driver's details</h3>
          <p>As they appear on driver's license</p>
          <form className="details-form">
            <label>Email address</label>
            <input type="email" name="email" value={form.email} onChange={handleInputChange} />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            <label>First name</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleInputChange} />
            {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
            <label>Last name</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleInputChange} />
            {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
            <label>Contact number</label>
            <div className="contact-number">
              <select name="country" value={form.country} onChange={handleInputChange}>
                <option value="egypt">🇪🇬 +20</option>
              </select>
              <input type="text" name="contactNumber" value={form.contactNumber} onChange={handleInputChange} />
            </div>
            {formErrors.contactNumber && <p className="error">{formErrors.contactNumber}</p>}
            <label>Country of residence</label>
            <select name="country" value={form.country} onChange={handleInputChange}>
              <option value="egypt">Egypt</option>
            </select>
            <label>Flight number <span>(optional)</span></label>
            <input type="text" name="flightNumber" value={form.flightNumber} onChange={handleInputChange} />
            <p className="privacy-statement">Our Privacy Statement explains how we use and protect your personal information.</p>
          </form>
          <h3>Billing address</h3>
          <form className="details-form">
            <label>First name</label>
            <input type="text" name="billingFirstName" value={form.billingFirstName} onChange={handleInputChange} />
            <label>Last name</label>
            <input type="text" name="billingLastName" value={form.billingLastName} onChange={handleInputChange} />
            <label>Contact number</label>
            <div className="contact-number">
              <select name="billingCountry" value={form.billingCountry} onChange={handleInputChange}>
                <option value="egypt">🇪🇬 +20</option>
              </select>
              <input type="text" name="billingContactNumber" value={form.billingContactNumber} onChange={handleInputChange} />
            </div>
            <label>Country</label>
            <select name="billingCountry" value={form.billingCountry} onChange={handleInputChange}>
              <option value="egypt">Egypt</option>
            </select>
            <label>Address</label>
            <input type="text" name="billingAddress" value={form.billingAddress} onChange={handleInputChange} />
            <label>City</label>
            <input type="text" name="billingCity" value={form.billingCity} onChange={handleInputChange} />
            <label>Postcode</label>
            <input type="text" name="billingPostcode" value={form.billingPostcode} onChange={handleInputChange} />
            <label>Is this a business booking?</label>
            <div className="business-booking">
              <input type="radio" name="businessBooking" value="yes" onChange={handleInputChange} /> Yes
              <input type="radio" name="businessBooking" value="no" onChange={handleInputChange} /> No
            </div>
          </form>
          <h3>How would you like to pay?</h3>
          <div className="payment-info">
            <p>Your payment details are secure</p>
            <div className="cards">
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg" alt="Mastercard" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg" alt="Visa" />
              <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/amex.svg" alt="American Express" />
            </div>
            <form className="details-form">
              <label>Cardholder's name <span>*</span></label>
              <input type="text" name="cardHolderName" value={form.cardHolderName} onChange={handleInputChange} />
              {formErrors.cardHolderName && <p className="error">{formErrors.cardHolderName}</p>}
              <label>Card number <span>*</span></label>
              <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleInputChange} />
              {formErrors.cardNumber && <p className="error">{formErrors.cardNumber}</p>}
              <label>Expiration date <span>*</span></label>
              <input type="text" name="expirationDate" placeholder="MM/YY" value={form.expirationDate} onChange={handleInputChange} />
              {formErrors.expirationDate && <p className="error">{formErrors.expirationDate}</p>}
              <label>CVC <span>*</span></label>
              <input type="text" name="cvc" value={form.cvc} onChange={handleInputChange} />
              {formErrors.cvc && <p className="error">{formErrors.cvc}</p>}
            </form>
            <div className="cancellation-policy">
              <p>Free cancellation up to 48 hours before pick-up</p>
            </div>
          </div>
          <h3>Terms and conditions</h3>
          <p>By clicking 'Book Now', you are confirming that you have read, understood, and accepted our Terms of service, Privacy Policy Terms and the Sixt rental terms.</p>
          <button className="book-now-button" onClick={handleBookNow} disabled={loading}>
            {loading ? 'Loading...' : 'Book now'}
          </button>
        </div>
        <div className="price-section">
          <div className="price-breakdown">
            <h3>Car price breakdown</h3>
            <div className="price-item">
              <span className="price-title">To pay now</span>
              <div className="price-row">
                <p className="price-description">Car hire charge</p>
                <p className="price-amount">EGP 4,431.83</p>
              </div>
              <div className="price-row">
                <p className="price-description">Protection</p>
                <p className="price-amount">EGP 2,722.16</p>
              </div>
              <div className="price-row">
                <p className="price-description">Subtotal</p>
                <p className="price-amount">EGP 7,153.99</p>
              </div>
            </div>
            <div className="price-item">
              <span className="price-title">To pay at pick-up</span>
              <div className="price-row">
                <p className="price-description">One way fee</p>
                <p className="price-amount">EGP 13,597.35</p>
              </div>
              <div className="price-row">
                <p className="price-description">Subtotal</p>
                <p className="price-amount">EGP 13,597.35</p>
              </div>
            </div>
            <p className="price-note">EGP prices are approx. You'll pay in USD, because that's the rental counter's currency.</p>
          </div>
          <div className="price-total">
            <p>Price for 3 days: approx. EGP 20,751.34</p>
          </div>
          <div className="great-choice">
            <h3>Great choice!</h3>
            <ul>
              <li>Customer rating: 6.8 / 10</li>
              <li>Rental counter in terminal</li>
              <li>Most popular fuel policy</li>
              <li>Easy to find counter</li>
              <li>Helpful counter staff</li>
              <li>Free Cancellation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPayment;
