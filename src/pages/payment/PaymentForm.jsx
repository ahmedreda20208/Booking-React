import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './paymentForm.css';
import Navbar from '../../components/navbar/Navbar';

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const price = searchParams.get('price') || '0';
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    total: parseFloat(price).toFixed(2)
  });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');

  useEffect(() => {
    setPaymentDetails(prevDetails => ({
      ...prevDetails,
      total: parseFloat(price).toFixed(2)
    }));
  }, [price]);

  const handleChange = e => {
    const { name, value } = e.target;
    setPaymentDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setBookingMessage('Your hotel booking is confirmed! Thank you for choosing our service.');
      setTimeout(() => {
        navigate('/'); // Navigate back to the home page after showing the message
      }, 3000); // Wait for 3 seconds before redirecting to the home page
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        {bookingMessage ? (
          <div className="booking-confirmation-message">
            {bookingMessage}
          </div>
        ) : (
          <>
            <div className="total-amount-display">
              <h2>Total Amount Due</h2>
              <p>${paymentDetails.total}</p>
              <p>We will charge this amount for your booking.</p>
            </div>
            <form className="payment-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={paymentDetails.expiryDate}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={paymentDetails.cvv}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="nameOnCard"
                placeholder="Name on Card"
                value={paymentDetails.nameOnCard}
                onChange={handleChange}
                required
              />
              {isLoading ? (
                <button type="button" disabled>Loading...</button>
              ) : (
                <button type="submit">Pay Now</button>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
