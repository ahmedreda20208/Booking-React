import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './carRentalSearch.css'; // Ensure you have a corresponding CSS file

const CarRentalSearch = () => {
  const [differentLocation, setDifferentLocation] = useState(false);
  const [ageChecked, setAgeChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/c-data'); // Change this to the actual path you want to navigate to
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="car-rental-search">
      <h2>Find the Perfect Car for Your Journey</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="pickup-location">Pick-up Location</label>
          <input type="text" id="pickup-location" name="pickup-location" required />
        </div>

        <div className="date-time-group">
          <div className="input-group">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input type="date" id="pickup-date" name="pickup-date" required />
          </div>
          <div className="input-group">
            <label htmlFor="pickup-time">Time</label>
            <input type="time" id="pickup-time" name="pickup-time" required />
          </div>
        </div>

        <div className="date-time-group">
          <div className="input-group">
            <label htmlFor="dropoff-date">Drop-off Date</label>
            <input type="date" id="dropoff-date" name="dropoff-date" required />
          </div>
          <div className="input-group">
            <label htmlFor="dropoff-time">Time</label>
            <input type="time" id="dropoff-time" name="dropoff-time" required />
          </div>
        </div>

        <div className="form-row checkbox-row">
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="different-dropoff"
              name="different-dropoff"
              onChange={() => setDifferentLocation(!differentLocation)}
            />
            <label htmlFor="different-dropoff">Drop car off at different location</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="driver-age"
              name="driver-age"
              checked={ageChecked}
              onChange={() => setAgeChecked(!ageChecked)}
            />
            <label htmlFor="driver-age">Driver aged 30 – 65?</label>
            {!ageChecked && (
              <div className="input-group inline">
                <label htmlFor="driver-age-input">Driver's Age</label>
                <input type="number" id="driver-age-input" name="driver-age-input" placeholder="Driver's Age" min="18" max="99" required />
              </div>
            )}
          </div>
        </div>

        {differentLocation && (
          <div className="input-group">
            <label htmlFor="dropoff-location">Drop-off Location</label>
            <input type="text" id="dropoff-location" name="dropoff-location" />
          </div>
        )}

        <button type="submit" className="search-button" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default CarRentalSearch;
