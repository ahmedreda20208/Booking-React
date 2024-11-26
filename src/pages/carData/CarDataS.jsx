import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import FooterCar from '../../components/FooterCar/FooterCar';
import './carDataS.css'; // Ensure you have a corresponding CSS file

const CarDataS = () => {
  const navigate = useNavigate();
  const [loadingPath, setLoadingPath] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleViewDeal = (path) => {
    setLoadingPath(path);
    setTimeout(() => {
      setLoadingPath(null);
      window.open(path, '_blank'); // Open the path in a new tab
    }, 2000);
  };

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" isFlight={true} />
      <div className="main-content">
        <div className="search-summary-box">
          <div className="location-info">
            <div className="location">
              <h3>New Cairo City</h3>
              <p>Mon, Jul 1, 2024, 10:00</p>
            </div>
            <div className="arrow">→</div>
            <div className="location">
              <h3>Marsa Alam International Airport</h3>
              <p>Wed, Jul 3, 2024, 10:00</p>
            </div>
            <button className="edit-button">Edit</button>
          </div>
        </div>
        <div className="content-area">
          <div className="filter-sidebar">
            <button className="map-button" onClick={handleShowMap}>
              {showMap ? 'Hide map' : 'Show on map'}
            </button>
            <div className={`map-container ${showMap ? 'show' : ''}`}>
              <button className="map-close-button" onClick={handleCloseMap}>×</button>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.0611223396974!2d31.49666740000001!3d30.0213034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839c1c4e433c9%3A0x6f87e4b3af6a9a65!2sNew%20Cairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2s!4v1623529688742!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
            <div className="filters">
              <h3>Filter</h3>
              <div className="filter-section">
                <h4>Location</h4>
                <label>
                  <input type="checkbox" /> Airport (in terminal)
                </label>
              </div>
              <div className="filter-section">
                <h4>Price per day</h4>
                <label>
                  <input type="checkbox" /> EGP 0 - EGP 1,000
                </label>
                <label>
                  <input type="checkbox" /> EGP 1,000 - EGP 2,000
                </label>
                <label>
                  <input type="checkbox" /> EGP 2,000 - EGP 3,000
                </label>
                <label>
                  <input type="checkbox" /> EGP 3,000 - EGP 4,000
                </label>
                <label>
                  <input type="checkbox" /> EGP 4,000 +
                </label>
              </div>
              <div className="filter-section">
                <h4>Car specs</h4>
                <label>
                  <input type="checkbox" /> Air Conditioning
                </label>
                <label>
                  <input type="checkbox" /> 4+ doors
                </label>
              </div>
              <div className="filter-section">
                <h4>Electric cars</h4>
                <label>
                  <input type="checkbox" /> Fully electric
                </label>
                <label>
                  <input type="checkbox" /> Hybrid
                </label>
                <label>
                  <input type="checkbox" /> Plug-in hybrid
                </label>
              </div>
              <div className="filter-section">
                <h4>Mileage</h4>
                <label>
                  <input type="checkbox" /> Limited
                </label>
              </div>
              <div className="filter-section">
                <h4>Transmission</h4>
                <label>
                  <input type="checkbox" /> Automatic
                </label>
              </div>
              <div className="filter-section">
                <h4>Car category</h4>
                <label>
                  <input type="checkbox" /> Medium
                </label>
                <label>
                  <input type="checkbox" /> Large
                </label>
              </div>
              <div className="filter-section">
                <h4>Fuel policy</h4>
                <label>
                  <input type="checkbox" /> Like for like
                </label>
              </div>
              <div className="filter-section">
                <h4>Deposit required at pick-up</h4>
                <label>
                  <input type="checkbox" /> EGP 0 - EGP 10,000
                </label>
                <label>
                  <input type="checkbox" /> EGP 10,000 - EGP 20,000
                </label>
                <label>
                  <input type="checkbox" /> EGP 20,000 +
                </label>
              </div>
              <div className="filter-section">
                <h4>Supplier</h4>
                <label>
                  <input type="checkbox" /> Green Motion
                </label>
              </div>
            </div>
          </div>
          <div className="car-list">
            <div className="car-item">
              <img src="https://cdn2.rcstatic.com/images/car_images/new_images/nissan/versa_lrg.jpg" alt="Nissan Sunny" className="car-image" />
              <div className="car-details">
                <h3>Nissan Sunny</h3>
                <p>5 seats, 1 large bag, 1 small bag</p>
                <p>300 km per rental</p>
                <p>Cairo International Airport - Marsa Alam International Airport</p>
                <p>EGP 20,785.93</p>
                <button
                  className="view-deal-button"
                  onClick={() => handleViewDeal('/c-book')}
                  disabled={loadingPath === '/c-book'}
                >
                  {loadingPath === '/c-book' ? 'Loading...' : 'View deal'}
                </button>
              </div>
            </div>
            <div className="car-item">
              <img src="https://cdn2.rcstatic.com/images/car_images_b/web/kia/cerato_lrg.jpg" alt="Kia Cerato" className="car-image" />
              <div className="car-details">
                <h3>Kia Cerato</h3>
                <p>5 seats, 1 large bag, 1 small bag</p>
                <p>300 km per rental</p>
                <p>Cairo International Airport - Marsa Alam International Airport</p>
                <p>EGP 26,414.79</p>
                <button
                  className="view-deal-button"
                  onClick={() => handleViewDeal('/kia-cerato-deal')}
                  disabled={loadingPath === '/kia-cerato-deal'}
                >
                  {loadingPath === '/kia-cerato-deal' ? 'Loading...' : 'View deal'}
                </button>
              </div>
            </div>
            <div className="car-item">
              <img src="https://cdn2.rcstatic.com/images/car_images_b/web/toyota/corolla_lrg.jpg" alt="Toyota Corolla" className="car-image" />
              <div className="car-details">
                <h3>Toyota Corolla</h3>
                <p>5 seats, 2 large bags</p>
                <p>Unlimited km per rental</p>
                <p>Cairo International Airport - Marsa Alam International Airport</p>
                <p>EGP 30,000.00</p>
                <button
                  className="view-deal-button"
                  onClick={() => handleViewDeal('/toyota-corolla-deal')}
                  disabled={loadingPath === '/toyota-corolla-deal'}
                >
                  {loadingPath === '/toyota-corolla-deal' ? 'Loading...' : 'View deal'}
                </button>
              </div>
            </div>
            <div className="car-item">
              <img src="https://cdn2.rcstatic.com/images/car_images_b/web/ford/focus_lrg.jpg" alt="Ford Focus" className="car-image" />
              <div className="car-details">
                <h3>Ford Focus</h3>
                <p>5 seats, 1 large bag, 2 small bags</p>
                <p>Unlimited km per rental</p>
                <p>Cairo International Airport - Marsa Alam International Airport</p>
                <p>EGP 28,500.00</p>
                <button
                  className="view-deal-button"
                  onClick={() => handleViewDeal('/ford-focus-deal')}
                  disabled={loadingPath === '/ford-focus-deal'}
                >
                  {loadingPath === '/ford-focus-deal' ? 'Loading...' : 'View deal'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCar />
    </div>
  );
}

export default CarDataS;
