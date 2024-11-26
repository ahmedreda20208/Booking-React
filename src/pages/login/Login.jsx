import React, { useState, useRef } from 'react';
import './login.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setIsLoading(true);

    try {
      // Simulate a delay for the login process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate a successful login response
      const data = { token: 'mockToken' };

      // Store the mock authentication token
      localStorage.setItem('authToken', data.token);

      // Navigate to home page after successful login
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="login-header">
            <h1>Login</h1>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailRef} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef} required />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
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
};

export default Login;
