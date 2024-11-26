import {
  faCalendarDays,
  faTrain,
} from "@fortawesome/free-solid-svg-icons"; // Import a free icon as an alternative
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./searchBar.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    if (!location || !date[0].startDate || !date[0].endDate) {
      alert("Please select a location and date.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to the search results page with location and date as query parameters
      navigate(`/a-data`);
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="customSearch">
      <div className="customSearchItem">
        <FontAwesomeIcon icon={faTrain} className="customIcon" /> {/* Replace with a free icon */}
        <input
          type="text"
          placeholder="Where are you going?"
          className="customSearchInput"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="customSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="customIcon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="customSearchText"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="customDate"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="customSearchItem">
        <button className="customBtn" onClick={handleSearch} disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
