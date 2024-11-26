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
import "./hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491550403.jpg?k=50a7b6b3b4480d095f9fb01294285a45dfc488dc30b4119b2c1daef9a3286d2e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491542639.jpg?k=0af753025c465e897993374d63a41c0b2399f99fee471a4a5b86cef48c7a4b64&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491550399.jpg?k=83f13df1f80a00b7a0b5e09189f7f189472bc97d92c2d7bb8ec9a5d766010663&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491542650.jpg?k=abf9c646b63a80368d5b440cab040f99b4c9b88cf29b211289b3a6da8979f215&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491550400.jpg?k=a05fbc323130aa7137650562271120b6cd26a5242435cc779484fec515b9cd78&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491549771.jpg?k=0576a7364042c2e92d0bf50d8d8316fda9416138ce9c40978fe6c9c6187ff1a6&o=&hp=1",
    }
    // Add more images as needed
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
      <Header type="list" isFlight={true} />
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
          <h1 className="hotelTitle">Hotel Jaz Almaza Bay</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Almaza Bay, Marsa Matrouh, Egypt</span>
          </div>
          <span className="hotelDistance">
            Excellent beachfront location with stunning views.
          </span>
          <span className="hotelPriceHighlight">
            Special offer: Book a stay over $150 and enjoy complimentary spa treatments.
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
              <h1 className="hotelTitle">Luxury Stay in Marsa Matrouh</h1>
              <p className="hotelDesc">
                Located in the beautiful Almaza Bay, Hotel Jaz Almaza Bay offers luxurious accommodations with private balconies overlooking the Mediterranean Sea. Guests can enjoy world-class dining, spa facilities, and access to exclusive beach clubs. Nearby attractions include Almaza Bay Marina and Cleopatra Beach.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a Relaxing Getaway!</h1>
              <span>
                Rated 9.5 for location and amenities.
              </span>
              <h2>
                <b>$200</b> per night
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

export default Hotel;