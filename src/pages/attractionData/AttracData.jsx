import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './attracData.css';

const AttracData = () => {
  const navigate = useNavigate();
  const [loadingPath, setLoadingPath] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const handleViewDeal = (path) => {
    setLoadingPath(path);
    setTimeout(() => {
      setLoadingPath(null);
      navigate(path);
    }, 2000);
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="new-main-content">
        <div className="filter-sidebar">
          <div className="filters">
            <h3>Filter by:</h3>
            <div className="filter-section">
              <h4>Category</h4>

              <div>
                <div className="category-header">
                  <label className="category-label">
                    <input type="checkbox" /> Tours (103)
                  </label>
                  <button className="toggle-button" onClick={() => toggleCategory('tours')}>
                    {openCategory === 'tours' ? '▲' : '▼'}
                  </button>
                </div>
                {openCategory === 'tours' && (
                  <div style={{ marginLeft: '20px' }}>
                    <label>
                      <input type="checkbox" /> Boat tours & cruises
                    </label>
                    <label>
                      <input type="checkbox" /> Bus & car tours
                    </label>
                    <label>
                      <input type="checkbox" /> Full day tours
                    </label>
                    <label>
                      <input type="checkbox" /> Half-day tours
                    </label>
                  </div>
                )}
              </div>

              <div>
                <div className="category-header">
                  <label className="category-label">
                    <input type="checkbox" /> Museums, arts & culture (97)
                  </label>
                  <button className="toggle-button" onClick={() => toggleCategory('museums')}>
                    {openCategory === 'museums' ? '▲' : '▼'}
                  </button>
                </div>
                {openCategory === 'museums' && (
                  <div style={{ marginLeft: '20px' }}>
                    <label>
                      <input type="checkbox" /> Cultural museums
                    </label>
                    <label>
                      <input type="checkbox" /> Historical buildings & monuments
                    </label>
                    <label>
                      <input type="checkbox" /> History museums
                    </label>
                    <label>
                      <input type="checkbox" /> Museums & cultural tours
                    </label>
                    <label>
                      <input type="checkbox" /> Places of worship
                    </label>
                  </div>
                )}
              </div>

              <div>
                <div className="category-header">
                  <label className="category-label">
                    <input type="checkbox" /> Nature & outdoor (34)
                  </label>
                  <button className="toggle-button" onClick={() => toggleCategory('nature')}>
                    {openCategory === 'nature' ? '▲' : '▼'}
                  </button>
                </div>
                {openCategory === 'nature' && (
                  <div style={{ marginLeft: '20px' }}>
                    <label>
                      <input type="checkbox" /> On water
                    </label>
                    <label>
                      <input type="checkbox" /> Outdoor tours
                    </label>
                    <label>
                      <input type="checkbox" /> Walking & hiking tours
                    </label>
                  </div>
                )}
              </div>

              <div>
                <div className="category-header">
                  <label className="category-label">
                    <input type="checkbox" /> Entertainment & tickets (18)
                  </label>
                  <button className="toggle-button" onClick={() => toggleCategory('entertainment')}>
                    {openCategory === 'entertainment' ? '▲' : '▼'}
                  </button>
                </div>
                {openCategory === 'entertainment' && (
                  <div style={{ marginLeft: '20px' }}>
                    <label>
                      <input type="checkbox" /> Digital
                    </label>
                    <label>
                      <input type="checkbox" /> Entertainment
                    </label>
                    <label>
                      <input type="checkbox" /> Food & drink experiences
                    </label>
                    <label>
                      <input type="checkbox" /> Gardens & parks
                    </label>
                    <label>
                      <input type="checkbox" /> Nightlife
                    </label>
                    <label>
                      <input type="checkbox" /> Sightseeing spots
                    </label>
                    <label>
                      <input type="checkbox" /> Sports & stadiums
                    </label>
                  </div>
                )}
              </div>

              <div>
                <label className="category-label">
                  <input type="checkbox" /> Food & drink (2)
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h4>Price</h4>
              <label>
                <input type="checkbox" /> EGP 0 - EGP 1,036 (16)
              </label>
              <label>
                <input type="checkbox" /> EGP 1,036 - EGP 2,072 (65)
              </label>
              <label>
                <input type="checkbox" /> EGP 2,072 - EGP 3,885 (216)
              </label>
              <label>
                <input type="checkbox" /> EGP 3,885 - EGP 6,475 (204)
              </label>
              <label>
                <input type="checkbox" /> EGP 6,475+ (388)
              </label>
            </div>
            <div className="filter-section">
              <h4>Show results with</h4>
              <label>
                <input type="checkbox" /> Free cancellation (866)
              </label>
              <label>
                <input type="checkbox" /> Skip the line (1)
              </label>
            </div>
            <div className="filter-section">
              <h4>Review Score</h4>
              <label>
                <input type="checkbox" /> 4.5 and up (4)
              </label>
              <label>
                <input type="checkbox" /> 4.0 and up (11)
              </label>
              <label>
                <input type="checkbox" /> 3.5 and up (13)
              </label>
              <label>
                <input type="checkbox" /> 3.0 and up (13)
              </label>
            </div>
            <div className="filter-section">
              <h4>Time of day</h4>
              <label>
                <input type="checkbox" /> Morning (655)
              </label>
              <label>
                <input type="checkbox" /> Afternoon (269)
              </label>
              <label>
                <input type="checkbox" /> Evening and night (199)
              </label>
            </div>
            <div className="filter-section">
              <h4>Languages</h4>
              <label>
                <input type="checkbox" /> English (114)
              </label>
              <label>
                <input type="checkbox" /> Spanish (82)
              </label>
              <label>
                <input type="checkbox" /> French (74)
              </label>
              <label>
                <input type="checkbox" /> German (73)
              </label>
              <label>
                <input type="checkbox" /> Italian (66)
              </label>
              <label>
                <input type="checkbox" /> Arabic (42)
              </label>
              <label>
                <input type="checkbox" /> Russian (17)
              </label>
              <label>
                <input type="checkbox" /> Dutch (9)
              </label>
              <label>
                <input type="checkbox" /> Portuguese (7)
              </label>
              <label>
                <input type="checkbox" /> Japanese (6)
              </label>
            </div>
          </div>
        </div>

        <div className="listing-area">
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/339705138.jpg?k=68e85dd20a041b7c4c7360eb8966bbbcd7dce7dac5093dc6aff2cb47020929bf&o=" alt="Alexandria" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>3 Hours Private Tour in Nubian Village from Aswan</h3>
              <p style={{ margin: '0 0 8px 0' }}>A visit to the Nubian Village in Aswan is a unique and fascinating experience that provides a glimpse into the culture and traditions of the Nubian people.</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 4,735.36</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/nubian-village-tour')}
                disabled={loadingPath === '/nubian-village-tour'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/nubian-village-tour' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>

          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x320/340091563.jpg?k=cc409036d197a10167e35ec5dbdf4b76264b1cfc4c5b04e01aea8718f5d4b321&o=" alt="Hurghada" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>3 Hours Private Tour in Nubian Village from Aswan</h3>
              <p style={{ margin: '0 0 8px 0' }}>A visit to the Nubian Village in Aswan is a unique and fascinating experience that provides a glimpse...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 4,735.36</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/nubian-dinner')}
                disabled={loadingPath === '/nubian-dinner'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/nubian-dinner' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/339795974.jpg?k=694e5b2d29558224378d84789c560d35c25314007842c2ba7b56223f4d0a1c2c&o=" alt="Hurghada" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>Felucca Tour to Elephantine Island</h3>
              <p style={{ margin: '0 0 8px 0' }}>With artifacts which date back to the predynastic periods, Elephantine Island is one of the most...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 12,080</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/elephantine-island-tour')}
                disabled={loadingPath === '/elephantine-island-tour'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/elephantine-island-tour' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/339785679.jpg?k=eac1dd6306176476136b3c6cda2afb9d6664cb4a81e81bb55e512b6c2773c7bd&o=" alt="Aswan" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>Sound and Light Show Aswan</h3>
              <p style={{ margin: '0 0 8px 0' }}>Have you ever wondered what life has been thousands of years ago? You will know about it through...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 4,687.04</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/sound-and-light-show')}
                disabled={loadingPath === '/sound-and-light-show'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/sound-and-light-show' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x320/341688509.jpg?k=a347ed2c9b1c74ef10ad9f325b6a684d98c2c039dce369b626592c08be195c2e&o=" alt="Aswan" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>Amazing Egypt sailing Nile cruise from Aswan to Luxor&Abu Simbel for 3 nights</h3>
              <p style={{ margin: '0 0 8px 0' }}>Savor the timeless experience that is a Nile cruise as you sail from Aswan to Luxor on an indulge...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 42,618.23</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/nile-cruise')}
                disabled={loadingPath === '/nile-cruise'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/nile-cruise' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/325133644.jpg?k=db3872a5b28537bebf6945a6181d36cba89b66a30329c95ac08421a94436395e&o=" alt="Abu Simbel" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>Day Tour to Abu Simbel and Philae Temple From Aswan</h3>
              <p style={{ margin: '0 0 8px 0' }}>Embark on a mesmerizing Day Tour to Abu Simbel and Philae Temple From Aswan, where ancient wonder...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 7,557.25</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/abu-simbel-philae-temple-tour')}
                disabled={loadingPath === '/abu-simbel-philae-temple-tour'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/abu-simbel-philae-temple-tour' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x320/339268302.jpg?k=f80aeaf48c0985defd1f6448316ee4b008175c0b5bc1189043d29ea740af7f06&o=" alt="Kom Ombo" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>Private Day To Kom Ombo And Edfu Temples From Aswan</h3>
              <p style={{ margin: '0 0 8px 0' }}>Private day trip from Aswan to explore the ancient Nile-side temples of Kom Ombo and Edfu with th...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 5,315.20</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/kom-ombo-edfu-temples-tour')}
                disabled={loadingPath === '/kom-ombo-edfu-temples-tour'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/kom-ombo-edfu-temples-tour' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          <div className="listing-item" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/340083586.jpg?k=046f8bfa5057367e28fcf93940d0558bcdd8aaf789f0771c6e51d2fd70c2d455&o=" alt="Botanical Garden" style={{ width: '150px', height: 'auto', borderRadius: '8px' }} />
            <div className="listing-details" style={{ marginLeft: '16px', flex: '1' }}>
              <h4>Aswan</h4>
              <h3 style={{ margin: '0 0 8px 0' }}>Private Tour Felucca and Botanical Garden In Aswan</h3>
              <p style={{ margin: '0 0 8px 0' }}>Felucca Sailing Trip on the Nile in Aswan, where the enchantment of ancient Egypt comes to life...</p>
              <p style={{ color: 'green', margin: '0 0 8px 0' }}>Free cancellation available</p>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>From EGP 4,107.20</p>
              <button
                className="view-button"
                onClick={() => handleViewDeal('/felucca-botanical-garden')}
                disabled={loadingPath === '/felucca-botanical-garden'}
                style={{ backgroundColor: '#71BCAA', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer' }}
              >
                {loadingPath === '/felucca-botanical-garden' ? 'Loading...' : 'See availability'}
              </button>
            </div>
          </div>
          {/* Add more listing items as needed */}
        </div>
      </div>
    </div>
  );
}

export default AttracData;
