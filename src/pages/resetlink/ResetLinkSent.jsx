import React from 'react';
import './resetLinkSent.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

function ResetLinkSent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, phone } = location.state || {}; // Destructure email and phone from location state

  const handleBackToSignIn = () => {
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <div className="reset-link-sent-container">
        <h1>Check your inbox or messages</h1>
        {email && (
          <p>
            We just emailed instructions and a reset password link to <strong>{email}</strong>. It might take a few minutes to arrive.
          </p>
        )}
        {phone && (
          <p>
            We just sent a text message with instructions and a reset password link to <strong>{phone}</strong>. It might take a few minutes to arrive.
          </p>
        )}
        <button onClick={handleBackToSignIn}>Back to sign-in</button>
        <p className="terms">
          By signing in or creating an account, you agree with our <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Statement</a>.
        </p>
        <footer>
          <p>All rights reserved.</p>
          <p>Copyright (2006-2024) – YourCompanyName™</p>
        </footer>
      </div>
    </div>
  );
}

export default ResetLinkSent;
