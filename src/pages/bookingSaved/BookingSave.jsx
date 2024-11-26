import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './bookingSave.css'; // Make sure to create this CSS file

const BookingSave = () => {
  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <Header type="list" isFlight={true} />
      <div className="saved-header">
        <div className="saved-nav">
          <button className="saved-button active">Saved</button>
          <button className="saved-button">My next trip</button>
          <button className="saved-button">Share the list</button>
          <button className="saved-button">Create a list</button>
        </div>
      </div>
      <div className="saved-content">
        <div className="saved-instructions">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.118.0/illustrations-traveller/WishlistEmptyList.png" alt="Instructions" className="instructions-image" />
          <h3>Here are 3 simple steps to get you started:</h3>
          <ol>
            <li>Search for a place to stay</li>
            <li>Tap the heart icon when you find a property you like</li>
            <li>You'll find everything you've saved here</li>
          </ol>
          <button className="start-searching-button">Start searching</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSave;
