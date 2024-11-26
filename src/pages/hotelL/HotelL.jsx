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
import { Link } from "react-router-dom";
import "./hotelL.css";

const HotelL = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34743380.jpg?k=e181a834db0a6efaaf7e8d516570f601c2945bd0281aa5608065e65814c93ffe&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33539040.jpg?k=16978ed46f7fe018f586d13772df32f5633526b9e197b8f1289282ae9ed15751&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/39600760.jpg?k=2f1305883945e8dbaf2a7d23783c57c90e07791ac4761a8a1632cca371a09ccd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/33538969.jpg?k=b035ad312c2c1543decb81f26c9155a57f7e7a86a3e6716fc89a0506bba879fa&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34742981.jpg?k=9e9e731b6b6bb617948e27c4abb154efdf70fd3964d3d6fe33ccf269b524b494&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34744622.jpg?k=b2e629d8e448920582a42604fc2bc2526469a993fe033fb331cdb4da08b9b01e&o=&hp=1",
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
      <div className="hotelContainerModified">
        {open && (
          <div className="sliderModified">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="closeModified"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrowModified"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapperModified">
              <img src={photos[slideNumber].src} alt="" className="sliderImgModified" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrowModified"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapperModified">
          {isLoading ? (
            <button className="bookNowModified" disabled>Loading...</button>
          ) : (
            <button className="bookNowModified" onClick={handleBookNowClick}>Reserve or Book Now!</button>
          )}
          <h1 className="hotelTitleModified">Beau Site Belle Vue Hotel</h1>
          <div className="hotelAddressModified">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Almaza Bay, Marsa Matrouh, Egypt</span>
          </div>
          <span className="hotelDistanceModified">
            Excellent beachfront location with stunning views.
          </span>
          <span className="hotelPriceHighlightModified">
            Special offer: Book a stay over $150 and enjoy complimentary spa treatments.
          </span>
          <div className="hotelImagesModified">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapperModified" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImgModified"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetailsModified">
            <div className="hotelDetailsTextsModified">
              <h1 className="hotelTitleModified">Luxury Stay in Marsa Matrouh</h1>
              <p className="hotelDescModified">
                Located in the beautiful Almaza Bay, Beau Site Belle Vue Hotel offers luxurious accommodations with private balconies overlooking the Mediterranean Sea. Guests can enjoy world-class dining, spa facilities, and access to exclusive beach clubs. Nearby attractions include Almaza Bay Marina and Cleopatra Beach.
              </p>
            </div>
            <div className="hotelDetailsPriceModified">
              <h1>Perfect for a Relaxing Getaway!</h1>
              <span>
                Rated 9.5 for location and amenities.
              </span>
              <h2>
                <b>$200</b> per night
              </h2>
              {isLoading ? (
                <button className="bookNowModified" disabled>Loading...</button>
              ) : (
                <button className="bookNowModified" onClick={handleBookNowClick}>Reserve or Book Now!</button>
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

export default HotelL;
