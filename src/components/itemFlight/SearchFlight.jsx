import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchFlight.css';

const SearchFlight = ({
  id,
  imgSrc,
  airline,
  departureTime,
  arrivalTime,
  duration,
  features,
  freeCancellation,
  cancellationDetails,
  rating,
  price,
  dealUrl,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='flightItem'>
      <img src={imgSrc} alt='' className='fiImg' />
      <div className='fiDesc'>
        <h1 className='fiAirline'>{airline}</h1>
        <span className='fiDepartureTime'>{departureTime}</span>
        <span className='fiArrivalTime'>{arrivalTime}</span>
        <span className='fiDuration'>{duration}</span>
        <span className='fiFeatures'>{features}</span>
        <span className='fiFreeCancellation'>{freeCancellation}</span>
        <span className='fiCancellationDetails'>{cancellationDetails}</span>
      </div>
      <div className='fiDetails'>
        <div className='fiRating'>
          <span>{rating.text}</span>
          <button>{rating.value}</button>
        </div>
        <div className='fiDetailTexts'>
          <span className='fiPrice'>${price}</span>
          <span className='fiTaxOp'>Includes taxes and fees</span>
          <a href={dealUrl} target="_blank" rel="noopener noreferrer">
            <button className='fiViewDealButton'>
              {isLoading ? 'Loading...' : 'View Deal'}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchFlightList = () => {
  const flights = [
    {
      id: 1,
      imgSrc: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/MS.png?crop=false&width=108&height=92&fallback=default2.png&_v=669c0b01151db88405f0d1b5a9afe8bf',
      airline: 'Egypt Air',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      duration: '2h',
      features: 'Wi-Fi, Entertainment',
      freeCancellation: 'Free Cancellation',
      cancellationDetails: 'Cancel within 24 hours for a full refund.',
      rating: { text: 'Excellent', value: 4.5 },
      price: 199.99,
      dealUrl: 'https://booking.kayak.com/book/flight?code=aNGiFndhN7.--FpIn3XEk-HBbwEsupe71GB81656d8e.12696.c5609a3a7cc7eeda5d18bb3650618d15&h=5b5fc650254f&sub=F3932144490569665604B0016e73f521&pageOrigin=F..RP.FE.M0',
    },
    {
      id: 2,
      imgSrc: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/UJ.png?crop=false&width=108&height=92&fallback=default1.png&_v=7f4424db1d3246cfbe3cc8a1b144882e',
      airline: 'AlMasria',
      departureTime: '1:00 PM',
      arrivalTime: '3:30 PM',
      duration: '2h 30m',
      features: 'Meal, Extra legroom',
      freeCancellation: 'Free Cancellation',
      cancellationDetails: 'Cancel within 24 hours for a full refund.',
      rating: { text: 'Very Good', value: 4.0 },
      price: 249.99,
      dealUrl: 'https://www.onetravel.com/air/payment?sid=1&locatorkey=1f3412b4-82a0-458c-ac56-c619570530a9&cid=113&thirdparty=true',
    },
    {
      id: 3,
      imgSrc: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/SM.png?crop=false&width=108&height=92&fallback=default2.png&_v=8e7027751112497f7acca085c96bc4c5',
      airline: 'Air Cairo',
      departureTime: '4:00 PM',
      arrivalTime: '6:00 PM',
      duration: '2h',
      features: 'Wi-Fi, Entertainment, Meal',
      freeCancellation: 'Free Cancellation',
      cancellationDetails: 'Cancel within 24 hours for a full refund.',
      rating: { text: 'Good', value: 3.5 },
      price: 179.99,
      dealUrl: 'https://www.onetravel.com/air/payment?sid=1&locatorkey=1f3412b4-82a0-458c-ac56-c619570530a9&cid=144&thirdparty=true',
    },
    {
      id: 4,
      imgSrc: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/J9.png?crop=false&width=108&height=92&fallback=default3.png&_v=cc05203036bee2b9de27c94c93da10a5',
      airline: 'Jazeera',
      departureTime: '8:00 AM',
      arrivalTime: '10:30 AM',
      duration: '2h 30m',
      features: 'Wi-Fi, Extra legroom',
      freeCancellation: 'Free Cancellation',
      cancellationDetails: 'Cancel within 24 hours for a full refund.',
      rating: { text: 'Very Good', value: 4.0 },
      price: 229.99,
      dealUrl: 'https://example.com/deal4',
    },
    {
      id: 5,
      imgSrc: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/MS.png?crop=false&width=108&height=92&fallback=default2.png&_v=669c0b01151db88405f0d1b5a9afe8bf',
      airline: 'Egypt Air',
      departureTime: '11:00 AM',
      arrivalTime: '1:00 PM',
      duration: '2h',
      features: 'Meal, Entertainment',
      freeCancellation: 'Free Cancellation',
      cancellationDetails: 'Cancel within 24 hours for a full refund.',
      rating: { text: 'Good', value: 3.5 },
      price: 189.99,
      dealUrl: 'https://example.com/deal5',
    },
    {
      id: 6,
      imgSrc: 'https://content.r9cdn.net/rimg/provider-logos/airlines/v/NE.png?crop=false&width=108&height=92&fallback=default1.png&_v=15e9fbc933cdee7a9a7cebb70f1822ff',
      airline: 'Nesma Airlines',
      departureTime: '2:00 PM',
      arrivalTime: '4:00 PM',
      duration: '2h',
      features: 'Wi-Fi, Entertainment, Extra legroom',
      freeCancellation: 'Free Cancellation',
      cancellationDetails: 'Cancel within 24 hours for a full refund.',
      rating: { text: 'Excellent', value: 4.5 },
      price: 249.99,
      dealUrl: 'https://example.com/deal6',
    },
  ];

  return (
    <div className='flightContainer'>
      {flights.map((flight, index) => (
        <SearchFlight
          key={index}
          id={flight.id}
          imgSrc={flight.imgSrc}
          airline={flight.airline}
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          duration={flight.duration}
          features={flight.features}
          freeCancellation={flight.freeCancellation}
          cancellationDetails={flight.cancellationDetails}
          rating={flight.rating}
          price={flight.price}
          dealUrl={flight.dealUrl} // Passed dealUrl prop
        />
      ))}
    </div>
  );
};

export default SearchFlightList;
