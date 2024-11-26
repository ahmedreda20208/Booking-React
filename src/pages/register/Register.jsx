import React, { useState, useRef } from 'react';
import './register.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(''); // Clear any previous errors

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords must match');
      return;
    }

    setIsLoading(true); // Show loading indicator

    try {
      // Simulate a delay for the registration process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate a successful registration response
      const data = { token: 'mockToken' };

      // Store the mock authentication token
      localStorage.setItem('authToken', data.token); // Example token storage

      // Navigate to home page after successful registration
      navigate('/');
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="register-header">
            <h1>Register</h1>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="register-form">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" ref={firstNameRef} required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" ref={lastNameRef} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailRef} required />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" ref={phoneRef} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef} required />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" ref={confirmPasswordRef} required />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>
            <div className="social-links">
              <a href="https://www.gmail.com/" target="_blank" rel="noreferrer" className="social-link google">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-link facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.apple.com/" target="_blank" rel="noreferrer" className="social-link apple">
                <FontAwesomeIcon icon={faApple} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
