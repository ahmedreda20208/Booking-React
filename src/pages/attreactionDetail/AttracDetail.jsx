import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './attracDetail.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const AttracDetail = () => {
  const [loading, setLoading] = useState(false);
  const [childTickets, setChildTickets] = useState(0);
  const [adultTickets, setAdultTickets] = useState(0);
  const [infantTickets, setInfantTickets] = useState(0);
  const [error, setError] = useState(''); // Added error state

  const navigate = useNavigate();

  const handleNext = () => {
    if (adultTickets === 0) {
      setError('Please select at least one adult ticket to proceed.'); // Set error message if no adult tickets
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/a-pay'); // Update with your actual next page route
    }, 2000);
  };

  const handleTicketChange = (type, operation) => {
    if (type === 'child') {
      if (operation === 'increase' && childTickets < 15) setChildTickets(childTickets + 1);
      if (operation === 'decrease' && childTickets > 0) setChildTickets(childTickets - 1);
    }
    if (type === 'adult') {
      if (operation === 'increase' && adultTickets < 15) setAdultTickets(adultTickets + 1);
      if (operation === 'decrease' && adultTickets > 0) setAdultTickets(adultTickets - 1);
    }
    if (type === 'infant') {
      if (operation === 'increase' && infantTickets < 15) setInfantTickets(infantTickets + 1);
      if (operation === 'decrease' && infantTickets > 0) setInfantTickets(infantTickets - 1);
    }
  };

  const calculateTotalPrice = () => {
    const adultPrice = 4735.36;
    const discount = 400;
    const childPrice = adultPrice;
    const infantPrice = 0;

    const totalPrice = (adultTickets * (adultPrice - discount)) + (childTickets * (childPrice - discount)) + (infantTickets * infantPrice);
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="content">
        <div className="a-main-content">
          <div className="left-column">
            <div className="title-section">
              <h1>3 Hours Private Tour in Nubian Village from Aswan</h1>
              <button className="share-button">Share this attraction</button>
            </div>
            <div className="image-gallery">
              <img src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/339705138.jpg?k=68e85dd20a041b7c4c7360eb8966bbbcd7dce7dac5093dc6aff2cb47020929bf&o=" alt="Main" className="main-image" />
              <div className="side-images">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/339705184.jpg?k=660b56f467c7f01d8b0ca3cb213fbbf4edf7df5be78a853bc0ba2ce651cdcd07&o=" alt="Side1" className="side-image" />
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/339705227.jpg?k=acb6bf690371e63c0eb1e7a1963428b823b88610b035cd8e127221ba3761da38&o=" alt="Side2" className="side-image" />
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/339705266.jpg?k=9af664ae6eb6bcb6f0a4b83a5126a2cc4eeabd66bcfcb9f90f4e0d512576561b&o=" alt="Side3" className="side-image" />
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/339705352.jpg?k=c717c601a2e854ab1bdd6e12ab9ef28535f8fb397e96e0b47067db7e014583d1&o=" alt="Side4" className="side-image" />
              </div>
            </div>
            <div className="details">
              <div className="cancellation-info">
                <p className="free-cancellation">Free cancellation available</p>
                <p className="duration"><i className="far fa-clock"></i> Duration: 3 hours</p>
              </div>
              <div className="description">
                <p>A visit to the Nubian Village in Aswan is a unique and fascinating experience that provides a glimpse into the rich history and culture of the Nubian people. Here is a description of what you can expect during a visit to the Nubian Village:</p>
                <p>Boat ride: Your visit to the Nubian Village typically starts with a boat ride on the Nile River. You will enjoy stunning views of the river and the surrounding landscape as you make your way to the village.</p>
                <p>Nubian Village: Once you arrive at the village, your guide will lead you through the various parts of the village.</p>
                <p>Traditional Nubian homes: You will visit traditional Nubian homes, which are built from mud and feature colorful and intricate designs. Your guide will provide information about the unique architecture and design of these homes. Nubian museum: The Nubian Museum in Aswan provides a fascinating insight into the history and culture of the Nubian people.</p>
              </div>
              <h2>What's included</h2>
              <ul>
                <li>Motorboat ride</li>
                <li>Coffee and/or Tea</li>
                <li>Entrance fee</li>
                <li>Hotel pickup and drop-off</li>
              </ul>
              <h2>What's not included</h2>
              <ul>
                <li>Gratuities</li>
              </ul>
              <h2>Additional information</h2>
              <ul>
                <li>Wheelchair accessible</li>
                <li>Infants and small children can ride in a pram or stroller</li>
                <li>Public transportation options are available nearby</li>
                <li>Infants are required to sit on an adult’s lap</li>
                <li>Transportation options are wheelchair accessible</li>
              </ul>
              <h2>Itinerary information</h2>
              <div className="itinerary">
                <p className="itinerary-duration"><i className="far fa-clock"></i> Duration: 3 hours</p>
                <div className="itinerary-stop">
                  <p><i className="fas fa-map-marker-alt"></i> Stop at: Nile River Valley</p>
                  <p><i className="fas fa-check-circle"></i> Free admission</p>
                  <p>The Nile River is a major north-flowing river in northeastern Africa, and is widely considered to be the longest river in the world, with a total length of approximately 6,650 kilometers (4,130 miles). The river's basin is shared by 11 countries, including...</p>
                </div>
                <div className="itinerary-stop">
                  <p><i className="fas fa-map-marker-alt"></i> Stop at: Nubian Village</p>
                  <p><i className="fas fa-check-circle"></i> Admission ticket included</p>
                  <p>The Nubian Village is a traditional village located on the banks of the Nile River in southern Egypt, near the city of Aswan. A visit to the Nubian Village provides a unique and unforgettable cultural experience...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="ticket-selection">
              <h2>Tickets and prices</h2>
              <div className="ticket-dates">
                <button>8 Jul</button>
                <button>9 Jul</button>
                <button>10 Jul</button>
                <button>11 Jul</button>
              </div>
              <h3>Select time</h3>
              <button>08:00 AM</button>
              <h3>3 Hours Private Tour in Nubian Village from Aswan</h3>
              <label>Language options</label>
              <select>
                <option>English - Tour guide</option>
              </select>
              <label>How many tickets?</label>
              <div className="ticket-counter">
                <div>
                  <label>Child (age 6-10)</label>
                  <div className="price-info">EGP 4,735.36</div>
                </div>
                <div className="counter">
                  <button onClick={() => handleTicketChange('child', 'decrease')}>-</button>
                  <input type="text" value={childTickets} readOnly />
                  <button onClick={() => handleTicketChange('child', 'increase')}>+</button>
                </div>
              </div>
              <div className="ticket-counter">
                <div>
                  <label>Adult (age 11-99)</label>
                  <div className="price-info">EGP 4,735.36</div>
                </div>
                <div className="counter">
                  <button onClick={() => handleTicketChange('adult', 'decrease')}>-</button>
                  <input type="text" value={adultTickets} readOnly />
                  <button onClick={() => handleTicketChange('adult', 'increase')}>+</button>
                </div>
              </div>
              <div className="ticket-counter">
                <label>Infant (age 1-5)</label>
                <div className="counter">
                  <button onClick={() => handleTicketChange('infant', 'decrease')}>-</button>
                  <input type="text" value={infantTickets} readOnly />
                  <button onClick={() => handleTicketChange('infant', 'increase')}>+</button>
                </div>
              </div>
              <div className="total-price">
                <p>Total EGP {calculateTotalPrice()}</p>
                <p>Includes taxes and fees</p>
              </div>
              {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
              <button className="next-button" onClick={handleNext} disabled={loading}>
                {loading ? 'Loading...' : 'Next'}
              </button>
              <div className="free-cancellation-info">
                <p>Free cancellation available</p>
                <p>Cancel for free before July 10 at 8:00 AM for a full refund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttracDetail;
