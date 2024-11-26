import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './bookingRiw.css'; // Make sure to create this CSS file

const BookingRiw = () => {
  return (
    <div>
      <Navbar hideAuthButtons={true} />
     
      <div className="reviews-content">
        <div className="reviews-card">
          <img src="https://graph.facebook.com/v2.9/1049595689688541/picture?type=square&height=256&width=256" alt="Profile" className="profile-image" />
          <div className="reviews-info">
            <h3>Ahmed Mohamed</h3>
            <a href="#" className="edit-profile">Edit your profile</a>
            <div className="reviews-stats">
              <div className="reviews-stat">
                <span>All reviews</span>
                <span>0</span>
              </div>
              <div className="reviews-stat">
                <span>Property reviews</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-message">
          <img src="" alt="No Reviews" className="placeholder-image" />
          <p>You don't have any pending reviews.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingRiw;
