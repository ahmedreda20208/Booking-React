import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ id, imgSrc, title, distance, taxiOp, subtitle, features, cancelOp, cancelOpSubtitle, rating, price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  const handleAvailabilityClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.open(`/hotels/${id}`, "_blank"); // Use window.open to open the link in a new tab
    }, 2000);
  };

  return (
    <div className="searchItem">
      <img src={imgSrc} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">{taxiOp}</span>
        <span className="siSubtitle">{subtitle}</span>
        <span className="siFeatures">{features}</span>
        <span className="siCancelOp">{cancelOp}</span>
        <span className="siCancelOpSubtitle">{cancelOpSubtitle}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{rating.text}</span>
          <button>{rating.value}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
          <button className="siCheckButton" onClick={handleAvailabilityClick}>
            {isLoading ? "Loading..." : "See availability"}
          </button>
          
        </div>
      </div>
    </div>
  );
};

const SearchItemList = () => {
  const hotels = [
    {
      id: 1,
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square240/491550403.webp?k=dc87cf12f796afb92764634d6077e2983987d6c2f89da11856426ea6c8afc664&o=",
      title: "Jaz Almaza Bay",
      distance: "200m from beach",
      taxiOp: "Free airport shuttle",
      subtitle: "Deluxe Room with Sea View",
      features: "Entire room • 1 bathroom • 45m² • 1 king bed",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
      rating: { text: "Superb", value: "9.2" },
      price: 150,
    },
    {
      id: 2,
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square240/33538973.webp?k=a3a71fa411e9ace4290248433f0a565f9afa77e4adc3fd91171ec91213cd9686&o=",
      title: "Beau Site Belle Vue Hotel",
      distance: "100m from beach",
      taxiOp: "Free airport taxi",
      subtitle: "Standard Double Room",
      features: "Entire room • 1 bathroom • 30m² • 1 double bed",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
      rating: { text: "Very Good", value: "8.5" },
      price: 120,
    },
    {
      id: 3,
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/262867989.webp?k=bf5ec84add6b40f4692a46f9dcf3a80f1f31021ef4abb92aae8117e43b181bec&o=",
      title: "Carols Beau Rivage Matrouh",
      distance: "300m from beach",
      taxiOp: "Free airport shuttle",
      subtitle: "Superior Room with Sea View",
      features: "Entire room • 1 bathroom • 40m² • 1 queen bed",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
      rating: { text: "Fabulous", value: "8.9" },
      price: 140,
    },
    {
      id: 4,
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square240/548791500.webp?k=d902dee51c968e528a38f0f2532c743537f6612fd6e03436909f151152971a84&o=",
      title: "Adriatica Hotel",
      distance: "150m from beach",
      taxiOp: "Free airport taxi",
      subtitle: "Economy Room",
      features: "Entire room • 1 bathroom • 25m² • 2 twin beds",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
      rating: { text: "Excellent", value: "9.1" },
      price: 100,
    },
    {
      id: 5,
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square240/310379316.webp?k=687004f068ef0cfc1b46709154f111d81ff836bab4b6a33f009668d3dc6ca1ab&o=",
      title: "Negresco Hotel",
      distance: "250m from beach",
      taxiOp: "Free airport shuttle",
      subtitle: "Family Room with Sea View",
      features: "Entire room • 1 bathroom • 50m² • 2 queen beds",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
      rating: { text: "Very Good", value: "8.7" },
      price: 160,
    },
    {
      id: 6,
      imgSrc: "https://lh3.googleusercontent.com/p/AF1QipM4G-oCVvFmJkg0x4YOn0mZpQewc38mnJRjxu3_=w287-h192-n-k-rw-no-v1",
      title: "Matrouh Hotel",
      distance: "500m from beach",
      taxiOp: "Free airport taxi",
      subtitle: "Single Room",
      features: "Entire room • 1 bathroom • 20m² • 1 single bed",
      cancelOp: "Free cancellation",
      cancelOpSubtitle: "You can cancel later, so lock in this great price today!",
      rating: { text: "Good", value: "8.0" },
      price: 80,
    },
  ];

  return (
    <div>
      {hotels.map((hotel, index) => (
        <SearchItem
          key={index}
          id={hotel.id}
          imgSrc={hotel.imgSrc}
          title={hotel.title}
          distance={hotel.distance}
          taxiOp={hotel.taxiOp}
          subtitle={hotel.subtitle}
          features={hotel.features}
          cancelOp={hotel.cancelOp}
          cancelOpSubtitle={hotel.cancelOpSubtitle}
          rating={hotel.rating}
          price={hotel.price}
        />
      ))}
    </div>
  );
};

export default SearchItemList;
