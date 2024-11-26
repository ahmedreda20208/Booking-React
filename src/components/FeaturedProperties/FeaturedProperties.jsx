import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Coral Sea Water World</span>
                <span className="fpCity">Sharm El Sheikh</span>
                <span className="fpPrice">Starting from $60</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/e2/05/f6/premier-le-reve-hotel.jpg?w=1100&h=-1&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Premier Le Reve Hotel & Spa</span>
                <span className="fpCity">Sahl Hasheesh</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/264704769.jpg?k=fb56500e25b7619b170db11bb8f5c077b8a822bc8a1a194b53a8024d091e3a7b&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Steigenberger Hotel El Lessan</span>
                <span className="fpCity">Ras El Bar</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/hotel/max1024x768/478969065.jpg?k=5d4f8eb50f72c5fe6d013a001c9105e116010ce1f334cbee90ad90a680e30e40&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Luxury villa in seachell sahel el alamein</span>
                <span className="fpCity">Sīdī ‘Abd ar Raḩmān</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;