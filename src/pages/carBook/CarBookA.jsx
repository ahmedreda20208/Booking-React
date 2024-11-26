import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import FooterCar from '../../components/FooterCar/FooterCar';
import InstructionsModal from '../../components/InstructionsModal/InstructionsModal';
import './carBookA.css';

const CarBookA = () => {
  const [additionalDrivers, setAdditionalDrivers] = useState(0);
  const [babySeats, setBabySeats] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDropoffModal, setShowDropoffModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapLocation, setMapLocation] = useState({});
  const navigate = useNavigate();

  const handleAddDriver = () => {
    if (additionalDrivers < 3) {
      setAdditionalDrivers(additionalDrivers + 1);
    }
  };

  const handleRemoveDriver = () => {
    if (additionalDrivers > 0) {
      setAdditionalDrivers(additionalDrivers - 1);
    }
  };

  const handleAddSeat = () => {
    if (babySeats < 2) {
      setBabySeats(babySeats + 1);
    }
  };

  const handleRemoveSeat = () => {
    if (babySeats > 0) {
      setBabySeats(babySeats - 1);
    }
  };

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/c-pay'); // Change '/next-page' to your desired route
    }, 2000);
  };

  const handleShowMap = (location) => {
    setMapLocation(location);
    setShowMap(true);
  };

  const pickupContent = (
    <>
      <p>Supplied by Green Motion</p>
      <p>Pick-up location</p>
      <p>Cairo International Airport, Terminal 3 Arrival Hall, Cairo, Egypt</p>
      <p>Opening hours</p>
      <p>Mon - Sun 08:00 - 22:00</p>
      <div className="map-section">
        <button className="map-button" onClick={() => handleShowMap({ lat: 30.121944, lng: 31.405 })}>Show on map</button>
      </div>
    </>
  );

  const dropoffContent = (
    <>
      <p>Supplied by Green Motion</p>
      <p>Drop-off location</p>
      <p>Marsa Alam, Red Sea Governorate, Marsa Alam International Airport, Marsa Alam, Egypt</p>
      <p>Opening hours</p>
      <p>Mon - Sun 10:00 - 22:00</p>
      <div className="map-section">
        <button className="map-button" onClick={() => handleShowMap({ lat: 25.557, lng: 34.583 })}>Show on map</button>
      </div>
    </>
  );

  return (
    <div>
      <Navbar />
      <Header type="list" isFlight={true} />
      <div className="booking-container">
        <div className="header1">
          <div className="route">
            <span>Cairo International Airport</span>
            <span> &gt; </span>
            <span>Marsa Alam International Airport</span>
          </div>
          <button className="edit-button">Edit</button>
        </div>
        <a href="#" className="back-link">Back to Search results</a>
        <h2>Your deal</h2>
        <p>Next... Protection options</p>
        <div className="content">
          <div className="left-section">
            <div className="car-details">
              <img src="https://cdn2.rcstatic.com/images/car_images/new_images/nissan/versa_lrg.jpg" alt="Nissan Sunny" className="car-image"/>
              <h3>Nissan Sunny <span>or similar medium car</span></h3>
              <ul>
                <li>5 seats</li>
                <li>1 Large bag</li>
                <li>300 km per rental</li>
                <li>Automatic</li>
                <li>1 Small bag</li>
              </ul>
              <p>Cairo International Airport - In Terminal</p>
              <p>Marsa Alam International Airport - Meet & Greet</p>
            </div>
            <div className="additional-info">
              <h4>Great choice!</h4>
              <ul className="checklist">
                <li>Most popular company here</li>
                <li>Most popular fuel policy</li>
                <li>Rental counter in terminal</li>
                <li>Free Cancellation</li>
              </ul>
              <h4>Included in the price</h4>
              <ul className="checklist">
                <li>Collision Damage Waiver with EGP 28,626 deductible</li>
                <li>Theft Protection with EGP 28,626 excess</li>
                <li>300 kilometres per rental</li>
              </ul>
            </div>
            <div className="extras-section">
              <h3>Add extras, complete your trip</h3>
              <div className="extra-item">
                <div className="extra-info">
                  <h4>Additional driver</h4>
                  <p>EGP 333.98 each per rental</p>
                  <button className="extra-button">Pay at pick-up</button>
                  <p>If you want other people to drive as well</p>
                </div>
                <div className="extra-quantity">
                  <button className="quantity-button" onClick={handleRemoveDriver}>-</button>
                  <span>{additionalDrivers}</span>
                  <button className="quantity-button" onClick={handleAddDriver}>+</button>
                </div>
              </div>
              <div className="extra-item">
                <div className="extra-info">
                  <h4>Baby seat</h4>
                  <p>EGP 238.56 each per rental</p>
                  <button className="extra-button">Pay at pick-up</button>
                  <p>For babies: up to 9 kg / 20 lbs (about 1 year old)</p>
                </div>
                <div className="extra-quantity">
                  <button className="quantity-button" onClick={handleRemoveSeat}>-</button>
                  <span>{babySeats}</span>
                  <button className="quantity-button" onClick={handleAddSeat}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="pickup-dropoff">
              <h3>Pick-up and drop-off</h3>
              <p>Mon, Jul 1, 2024, 10:00</p>
              <p>Cairo International Airport</p>
              <a href="#" onClick={() => setShowPickupModal(true)}>View pick-up instructions</a>
              <p>Wed, Jul 3, 2024, 10:00</p>
              <p>Marsa Alam International Airport</p>
              <a href="#" onClick={() => setShowDropoffModal(true)}>View drop-off instructions</a>
            </div>
            <div className="price-breakdown">
              <h3>Car price breakdown</h3>
              <p>To pay now: EGP 15,282.48</p>
              <p>Subtotal: EGP 15,282.48</p>
              <p>To pay at pick-up: EGP 8,540.14</p>
              <p>Price for 2 days: approx. EGP 23,822.62</p>
            </div>
            <div className="price-summary">
              <p>This car is costing you just EGP 22,343.56 – a fantastic deal...</p>
              <p>At that time of year, the average medium car at Cairo International Airport costs EGP 22,665.14</p>
            </div>
            <div className="further-info">
              <p>Legal Entity Name: Unlimited Tours S.A.E</p>
              <p>+201066611027</p>
            </div>
          </div>
        </div>
        <button
          className="continue-button"
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Continue to book'}
        </button>
      </div>
      <FooterCar />

      {/* Modal for Pick-up Instructions */}
      <InstructionsModal
        show={showPickupModal}
        onClose={() => setShowPickupModal(false)}
        title="Pick-up instructions"
        content={pickupContent}
      />

      {/* Modal for Drop-off Instructions */}
      <InstructionsModal
        show={showDropoffModal}
        onClose={() => setShowDropoffModal(false)}
        title="Drop-off instructions"
        content={dropoffContent}
      />

      {/* Modal for Google Maps */}
      {showMap && (
        <div className="map-container show" onClick={() => setShowMap(false)}>
          <div className="map-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowMap(false)} className="map-close-button">&times;</button>
            <iframe
              src={`https://www.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}&z=15&output=embed`}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarBookA;
