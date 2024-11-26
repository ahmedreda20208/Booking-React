import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./hotelLi.css";

const HotelLi = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223435843.jpg?k=6c1aefb5aff324efb9cb48a1490074af825f2bbb26fe94fc7823452970a285cc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223435432.jpg?k=a7e3799e35bfedb5ec762949d7739cc646a417be074e4da062985884380720e0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223435083.jpg?k=8217ca263995e7543a5f8c747e15529bd04dbb48557e21c3568759d21a574ce1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491542650.jpg?k=abf9c646b63a80368d5b440cab040f99b4c9b88cf29b211289b3a6da8979f215&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223435781.jpg?k=91301c6edaccf731e4b6bc59f41f8303baa94656ddc280ad44f9235530d528e9&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223435343.jpg?k=328bd88a29b859234d208398c6670e9ea83fa8cade69ba5ca6d5b0d431751117&o=&hp=1",
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleBookNowClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/choose");
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          {isLoading ? (
            <button className="bookNow" disabled>Loading...</button>
          ) : (
            <button className="bookNow" onClick={handleBookNowClick}>Reserve or Book Now!</button>
          )}
          <h1 className="hotelTitle">Paradise Resort</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Bora Bora, French Polynesia</span>
          </div>
          <span className="hotelDistance">
            Located right on the beautiful white sand beaches of Bora Bora.
          </span>
          <span className="hotelPriceHighlight">
            Book now and get a 20% discount on your stay!
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Luxury Stay in Bora Bora</h1>
              <p className="hotelDesc">
                Experience the ultimate luxury at Paradise Resort in Bora Bora. Enjoy our overwater bungalows with stunning lagoon views, world-class dining, and a variety of water activities. Relax at our spa or explore the vibrant coral reefs nearby.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for Your Dream Vacation!</h1>
              <span>
                Rated 9.7 for excellent service and amenities.
              </span>
              <h2>
                <b>$500</b> per night
              </h2>
              {isLoading ? (
                <button className="bookNow" disabled>Loading...</button>
              ) : (
                <button className="bookNow" onClick={handleBookNowClick}>Reserve or Book Now!</button>
              )}
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default HotelLi;
