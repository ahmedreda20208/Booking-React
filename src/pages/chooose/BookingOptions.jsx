import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingoption.css';
import Navbar from '../../components/navbar/Navbar';

const BookingOptions = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const hotels = [
    { name: 'Hotel Jaz Almaza Bay', price: 200 },
    { name: 'Hotel Cleopatra Luxury', price: 150 },
    { name: 'Hotel Caesar Palace', price: 180 },
  ];

  const roomTypes = [
    { type: 'Standard', multiplier: 1 },
    { type: 'Deluxe', multiplier: 1.2 },
    { type: 'Suite', multiplier: 1.5 },
  ];

  const hotelReviews = [
    {
      hotelName: 'Hotel Jaz Almaza Bay',
      rating: 4.5,
      reviewCount: 320,
      description: 'A luxurious stay with stunning sea views and world-class amenities.',
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Amazing place with great service!' },
        { user: 'Bob', rating: 4, comment: 'Very good but a bit expensive.' },
      ]
    },
    {
      hotelName: 'Hotel Cleopatra Luxury',
      rating: 4.3,
      reviewCount: 280,
      description: 'Elegant rooms and exceptional service, perfect for a relaxing getaway.',
      reviews: [
        { user: 'Charlie', rating: 4, comment: 'Great hotel, will visit again.' },
        { user: 'Dave', rating: 4, comment: 'Good service and nice location.' },
      ]
    },
    {
      hotelName: 'Hotel Caesar Palace',
      rating: 4.7,
      reviewCount: 350,
      description: 'Experience the epitome of luxury and comfort at our prestigious location.',
      reviews: [
        { user: 'Eve', rating: 5, comment: 'Best hotel I have ever stayed in!' },
        { user: 'Frank', rating: 4.5, comment: 'Fantastic experience.' },
      ]
    },
  ];

  const handleHotelChange = (e) => {
    const selected = hotels.find(hotel => hotel.name === e.target.value);
    setSelectedHotel(selected.name);
    calculatePrice(selected.price, selectedRoomType);
  };

  const handleRoomTypeChange = (e) => {
    const selected = roomTypes.find(room => room.type === e.target.value);
    setSelectedRoomType(selected.type);
    calculatePrice(price, selected.multiplier);
  };

  const calculatePrice = (basePrice, multiplier) => {
    if (!multiplier) multiplier = 1;
    setPrice(basePrice * multiplier);
  };

  const handleBooking = () => {
    if (selectedHotel && selectedRoomType) {
      setIsLoading(true); // Start loading
      setTimeout(() => {
        setIsLoading(false); // Stop loading after the timeout
        const queryString = `?hotel=${encodeURIComponent(selectedHotel)}&roomType=${encodeURIComponent(selectedRoomType)}&price=${price}`;
        window.open('/payment' + queryString, '_blank');
      }, 2000); // Delay in milliseconds (2000ms = 2 seconds)
    } else {
      alert('Please select both a hotel and a room type before booking.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bookingContainer">
        <h1>Select Your Hotel and Room Type</h1>
        <select onChange={handleHotelChange} value={selectedHotel}>
          <option value="">Select a hotel</option>
          {hotels.map((hotel, index) => (
            <option key={index} value={hotel.name}>{hotel.name}</option>
          ))}
        </select>
        <select onChange={handleRoomTypeChange} value={selectedRoomType}>
          <option value="">Select room type</option>
          {roomTypes.map((room, index) => (
            <option key={index} value={room.type}>{room.type}</option>
          ))}
        </select>
        <div className="priceDisplay">
          <h2>Total Price: ${price}</h2>
        </div>
        <button disabled={!selectedHotel || !selectedRoomType || isLoading} onClick={handleBooking}>
          {isLoading ? 'Loading...' : 'Book Now'}
        </button>
        {selectedHotel && selectedRoomType && (
          <>
            <h2>Hotel Information</h2>
            {hotelReviews
              .filter(review => review.hotelName === selectedHotel)
              .map((review, index) => (
                <div key={index} className="hotelReview">
                  <span className="hotelRating">Rating: {review.rating} ({review.reviewCount} reviews)</span>
                  <p className="hotelDescription">{review.description}</p>
                  {review.reviews.map((rev, i) => (
                    <div key={i} className="userReview">
                      <strong>{rev.user}</strong>
                      <div className="ratingBar">
                        <div className="ratingFill" style={{ width: `${rev.rating * 20}%` }}></div>
                      </div>
                      <p>{rev.comment}</p>
                    </div>
                  ))}
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingOptions;
