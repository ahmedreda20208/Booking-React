import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './bookingTrips.css'; // Make sure to create this CSS file

const BookingTrips = () => {
  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="booking-trips-container">
        <div className="booking-trips-content">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/TripsGlobe.png" alt="Trips Icon" className="trips-icon" />
          <h2>Your trips live here</h2>
          <p>This page shows all your bookings. If you made a booking but don't see it here, you can import it using your booking confirmation number and PIN.</p>
          <a href="#" className="import-booking-link">Import booking</a>
        </div>
      </div>
    </div>
  );
};

export default BookingTrips;
