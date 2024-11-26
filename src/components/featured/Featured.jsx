import "./featured.css"

const featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://www.urtrips.com/wp-content/uploads/2017/11/Rommel-Beach-View.jpg" />
        <div className="featuredTitles">
          <h1>Marsa Matruh</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://pix10.agoda.net/hotelImages/31438092/531559456/bb9c90d277fec45626f0a4fec39c0327.jpg?ce=0&s=702x392" />
        <div className="featuredTitles">
          <h1>Alexandria</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.al-ain.com/images/2020/8/10/143-115557-best-tourist-places-dahab_700x400.jpg" />
        <div className="featuredTitles">
          <h1>Dahb</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default featured;