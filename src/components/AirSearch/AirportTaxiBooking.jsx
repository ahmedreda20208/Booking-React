import React, { useState } from 'react';
import './airportTaxiBooking.css';

const AirportTaxiBooking = () => {
  const [tripType, setTripType] = useState('one-way');
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking details:', {
      tripType,
      pickupLocation,
      destination,
      departureDate,
      returnDate,
      departureTime,
      returnTime,
      passengers
    });
  };
  

  const handlePassengerChange = (change) => {
    setPassengers(prev => {
      const updatedPassengers = prev + change;
      if (updatedPassengers < 1) return 1;
      if (updatedPassengers > 16) return 16;
      return updatedPassengers;
    });
  };

  return (
    <div className="airport-taxi-booking">
      <h1>Book your airport taxi</h1>
      <p>Easy transfers from the airport to your accommodations</p>
      <form onSubmit={handleSubmit}>
        <div className="trip-type">
          <label>
            <input
              type="radio"
              name="tripType"
              value="one-way"
              checked={tripType === 'one-way'}
              onChange={() => setTripType('one-way')}
            />
            One-way
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="return"
              checked={tripType === 'return'}
              onChange={() => setTripType('return')}
            />
            Return
          </label>
        </div>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Enter pick-up location"
          required
        />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
          required
        />
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          placeholder="Departure date"
          required
        />
        {tripType === 'return' && (
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            placeholder="Return date"
            required
          />
        )}
        <input
          type="time"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
          placeholder="Departure time"
          required
        />
        {tripType === 'return' && (
          <input
            type="time"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
            placeholder="Return time"
            required
          />
        )}
       <div className="passengers">
  <label htmlFor="passengers" className="passenger-label">Passengers</label>
  <button type="button" onClick={() => handlePassengerChange(-1)}>-</button>
  <input
    type="number"
    id="passengers"
    value={passengers}
    readOnly
  />
  <button type="button" onClick={() => handlePassengerChange(1)}>+</button>
</div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default AirportTaxiBooking;
