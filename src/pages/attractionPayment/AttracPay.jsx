import React, { useState } from 'react';
import './attracPay.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const AttracPay = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert('Form submitted successfully!');
      }, 2000);
    } else {
      alert('Please fill out all required fields.');
    }
  };

  const validateForm = () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const passportFirstName = document.getElementById('passport-first-name').value;
    const passportLastName = document.getElementById('passport-last-name').value;
    const passportExpirationDay = document.querySelector('.passport-date input:nth-child(1)').value;
    const passportExpirationMonth = document.querySelector('.passport-date input:nth-child(2)').value;
    const passportExpirationYear = document.querySelector('.passport-date input:nth-child(3)').value;
    const passportCountry = document.getElementById('passport-country').value;
    const passportNumber = document.getElementById('passport-number').value;
    const consentChecked = document.getElementById('consent').checked;

    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      passportFirstName &&
      passportLastName &&
      passportExpirationDay &&
      passportExpirationMonth &&
      passportExpirationYear &&
      passportCountry &&
      passportNumber &&
      consentChecked
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container">
        <div className="form-container">
          <h2>3 Hours Private Tour in Nubian Village from Aswan</h2>
          <p>This experience is hosted by a <a href="#">business</a></p>
          <form className="details-form" onSubmit={handleSubmit}>
            <h3>Your details</h3>
            <p>Sign in to use your saved details</p>
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input type="text" id="first-name" placeholder="First name" />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name *</label>
              <input type="text" id="last-name" placeholder="Last name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="Email address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (mobile number preferred) *</label>
              <div className="phone-input">
                <select>
                  <option value="+20">+20</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                  <option value="+86">+86</option>
                </select>
                <input type="text" id="phone" placeholder="Phone number" />
              </div>
            </div>
            <h3>Additional details</h3>
            <div className="form-group">
              <label>Provide pick-up location</label>
              <div>
                <input type="radio" id="contact-operator" name="pickup" defaultChecked />
                <label htmlFor="contact-operator">Contact tour operator (you'll get contact info in your voucher)</label>
              </div>
              <div>
                <input type="radio" id="provide-location" name="pickup" />
                <label htmlFor="provide-location">Provide location</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="special-req">Do you have special requirements?</label>
              <input type="text" id="special-req" placeholder="Special requirements" />
            </div>
          </form>
          <form className="details-form">
            <h3>Adult</h3>
            <div className="form-group">
              <label htmlFor="passport-first-name">First name *</label>
              <input type="text" id="passport-first-name" placeholder="First name" />
            </div>
            <div className="form-group">
              <label htmlFor="passport-last-name">Last name *</label>
              <input type="text" id="passport-last-name" placeholder="Last name" />
            </div>
            <div className="form-group">
              <label htmlFor="passport-expiration">Passport expiration date *</label>
              <div className="passport-date">
                <input type="text" placeholder="DD" />
                <input type="text" placeholder="MM" />
                <input type="text" placeholder="YYYY" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="passport-country">Passport country of issue *</label>
              <input type="text" id="passport-country" placeholder="Country of issue" />
            </div>
            <div className="form-group">
              <label htmlFor="passport-number">Passport number *</label>
              <input type="text" id="passport-number" placeholder="Passport number" />
            </div>
            <div className="form-group">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">I consent to Booking.com processing my passport info...</label>
            </div>
          </form>
          <div className="cancellation-policy">
            <h3>Cancellation policy</h3>
            <p>Cancel for free before July 7 at 8:00 AM for a full refund</p>
            <p>By clicking "Payment details" and completing a booking, you agree with the terms and conditions of Booking.com and the privacy policy of Viator.</p>
            <p>Please see our Privacy Statement to understand how we use and protect your personal information.</p>
            <button className="payment-button" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Loading...' : 'Payment details'}
            </button>
            <p>You'll pay in US Dollar (USD)</p>
            <p>The total price was converted to show the approximate cost in your selected currency. You'll be charged in the attraction's currency (USD).</p>
          </div>
        </div>
        <div className="summary-container">
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

export default AttracPay;
