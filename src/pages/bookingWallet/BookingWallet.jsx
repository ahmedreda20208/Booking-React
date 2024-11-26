import React from 'react';
import './bookingWallet.css';
import Navbar from '../../components/navbar/Navbar';

const BookingWallet = () => {
  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="wallet-header">
        <h2>Rewards & Wallet</h2>
        <p>Save money on your next adventure with Booking.com</p>
      </div>
      <div className="wallet-balance">
        <div className="wallet-balance-card">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/Wallet.png" alt="Wallet Icon" className="wallet-icon" />
          <div className="wallet-balance-info">
            <h3>Wallet balance</h3>
            <p>Includes all spendable rewards</p>
            <div className="wallet-amount">€ 0</div>
            <div className="wallet-details">
              <div>
                <span>Credits</span>
                <span>€ 0</span>
              </div>
              <div>
                <span>Vouchers</span>
                <span>€ 0</span>
              </div>
            </div>
            <a href="#" className="wallet-link">Browse Rewards and Wallet activity</a>
          </div>
        </div>
      </div>
      <div className="wallet-actions">
        <p>Got a coupon code? <a href="#">Add coupon into Wallet</a></p>
      </div>
      <div className="wallet-info">
        <h3>What's Rewards & Wallet?</h3>
        <div className="wallet-info-cards">
          <div className="wallet-info-card">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/GeniusCredits.png" alt="Icon" />
            <h4>Book and earn travel rewards</h4>
            <p>Credits, vouchers, you name it! These are all spendable on your next Booking.com trip.</p>
          </div>
          <div className="wallet-info-card">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/PhoneVoucher.png" alt="Icon" />
            <h4>Track everything at a glance</h4>
            <p>Your Wallet keeps all rewards safe, while updating you about your earnings and spendings.</p>
          </div>
          <div className="wallet-info-card">
            <img src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/MoneyUsp.png" alt="Icon" />
            <h4>Pay with Wallet to save money</h4>
            <p>If a booking accepts any rewards in your Wallet, it'll appear during payment for spending.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWallet;
