import React from 'react';
import './nearbyDestinations.css'; // Import your CSS file

const NearbyDestinations = () => {
  const destinations = [
    {
      name: "Alexandria",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/644370.jpg?k=1841f303e9bda7d0e316e0402af01ba0dcb2a08161bbb9ab5dabf50d6a33c139&o=",
      activities: 139,
      link: "/alexandria"
    },
    {
      name: "Hurghada",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/644344.jpg?k=5f1883f17fa3ad007bb3e9c7077cb45d191050f6cb1daeef8c2c2130b13b904a&o=",
      activities: 2297,
      link: "/hurghada"
    },
    {
      name: "Sharm El Sheikh",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/644643.jpg?k=f16350941f4a015b0551a87f61c5c675509f2bf19499258a71f20845bcb86b6f&o=",
      activities: 870,
      link: "/sharm-el-sheikh"
    },
    {
      name: "Cairo",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/644363.jpg?k=d7dfbc64880d52cf00797f6a0e34568e4d25fc913a719a721a06832b5c5a9308&o=",
      activities: 6609,
      link: "/cairo"
    },
    {
      name: "Marsa Alam",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/214939.jpg?k=bfe381d84c1cbbe51dd1fe96ee6890569397a6b0c5cba8ba6add54ee6d636008&o=",
      activities: 434,
      link: "/marsa-alam"
    },
    {
      name: "Dahab",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/644438.jpg?k=3151bbf5192c732549d023b58027cf7ca967f8f1fd0661f1a062bfd5ba1a6725&o=",
      activities: 108,
      link: "/dahab"
    },
    {
      name: "Luxor",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/644392.jpg?k=aca4a39db6b76213095120a07646c42699c53b3d722ba1b6623018aad7c0c294&o=",
      activities: 2364,
      link: "/luxor"
    },
    {
      name: "Aswan",
      img: "https://q-xx.bstatic.com/xdata/images/city/533x300/633161.jpg?k=c43a05e52fa692f0aa5a6049dd674ab737f5af350972e47d2d66a3fd622908ab&o=",
      activities: 932,
      link: "a-data"
    },
    {
      name: "Siwa",
      img: "https://r-xx.bstatic.com/xdata/images/xphoto/300x320/341655119.jpg?k=6c6a7e5df375db177fd7d4dc3d9da35a2c23bcbd6e887359e219dc64a035058b&o=",
      activities: 200,
      link: "/siwa"
    },
    {
      name: "Fayoum",
      img: "https://r-xx.bstatic.com/xdata/images/xphoto/300x320/339316925.jpg?k=e7e666300ce1ebdf33bccfaa9e361e858284162375613cbbab915bd2b5f3bdf7&o=",
      activities: 150,
      link: "/fayoum"
    },
  ];

  return (
    <div className="nearby-destinations">
      <h3 className="header-left">Nearby destinations</h3>
      <div className="destinations-container">
        {destinations.map((destination, index) => (
          <div className="destination" key={index}>
            <a href={destination.link} target="_blank" rel="noopener noreferrer">
              <img src={destination.img} alt={destination.name} />
              <div className="destination-info">
                <h4>{destination.name}</h4>
                <p>{destination.activities} things to do</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyDestinations;
