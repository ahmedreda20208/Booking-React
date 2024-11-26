import React, { useState, useRef } from 'react';
import './forgotPassword.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function ForgotPassword({ onResetLinkSent }) {
  const emailRef = useRef();
  const phoneRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resetMethod, setResetMethod] = useState('email'); // Default reset method is email

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');
    const email = emailRef.current ? emailRef.current.value : '';
    const phone = phoneRef.current ? phoneRef.current.value : '';

    if ((resetMethod === 'email' && !email) || (resetMethod === 'phone' && !phone)) {
      setError(`Please enter your ${resetMethod}`);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetMethod === 'email' ? email : '', phone: resetMethod === 'phone' ? phone : '' }),
      });

      if (!response.ok) {
        throw new Error('Verification failed');
      }

      // On successful verification
      onResetLinkSent(resetMethod === 'email' ? email : phone);
      navigate('/reset-link-sent', { state: { email: resetMethod === 'email' ? email : '', phone: resetMethod === 'phone' ? phone : '' } });
    } catch (error) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="forgot-password-container">
        <form onSubmit={handleSubmit}>
          <div className="forgot-password-header">
            <h1>Forgot Password</h1>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="forgot-password-form">
            <label>
              <input
                type="radio"
                name="resetMethod"
                value="email"
                checked={resetMethod === 'email'}
                onChange={() => setResetMethod('email')}
              />
              Reset via Email
            </label>
            <label>
              <input
                type="radio"
                name="resetMethod"
                value="phone"
                checked={resetMethod === 'phone'}
                onChange={() => setResetMethod('phone')}
              />
              Reset via Phone Number
            </label>

            {resetMethod === 'email' && (
              <>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailRef} />
              </>
            )}
            {resetMethod === 'phone' && (
              <>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" ref={phoneRef} />
              </>
            )}

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
