import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

const Header = ({
  type,
  isFlight = false,
  headerTitle = "A lifetime of discounts? It's Genius.",
  headerDescription = "Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account",
  hideSearch = false,
}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    const destinationLower = destination.trim().toLowerCase();

    if (destinationLower === "") {
      alert("Please enter a destination.");
      return;
    }

    const { startDate, endDate } = date[0];
    if (!startDate || !endDate || startDate > endDate) {
      alert("Please select a valid date range.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/hotels", { state: { destination, date, options } });
    }, 2000);
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className={`headerListItem ${!type ? "active" : ""}`} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={`headerListItem ${type === "flights" ? "active" : ""}`} onClick={() => navigate("/flight")}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={`headerListItem ${type === "car" ? "active" : ""}`} onClick={() => navigate("/car")}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className={`headerListItem ${type === "attractions" ? "active" : ""}`} onClick={() => navigate("/attraction")}>
          <FontAwesomeIcon icon={faTrain}  />
            <span>Attractions</span>
            
          </div>
          <div className={`headerListItem ${type === "taxis" ? "active" : ""}`} onClick={() => navigate("/airport")}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">{headerTitle}</h1>
            <p className="headerDesc">{headerDescription}</p>
            {!hideSearch && (
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                          <span className="optionCounterNumber">{options.adult}</span>
                          <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                          <span className="optionCounterNumber">{options.children}</span>
                          <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                          <span className="optionCounterNumber">{options.room}</span>
                          <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    {isLoading ? "Loading..." : "Search"}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
