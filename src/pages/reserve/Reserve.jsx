import React from 'react'; 
import Navbar from '../../components/navbar/Navbar';
import './reserve.css';

//import MailList from "../../components/mailList/MailList";
import {
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';


function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [
  createData('', '', '', '', '', 0),
  createData('', '', '', '', '', 0),
  createData('', '', '', '', '', 0),
  createData('', '', '', '', '', 0),
  createData('', '', '', '', '', 0),
];

const Reserve = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    // Perform search logic here
  };

  const handleAmountChange = (index, value) => {
    rows[index].amount = value;
  };

  return (
    <div className='grid-container'>
      <Navbar />
      <h1>Availabilty</h1>
      <div className="header-container">
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
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
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.adult}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.room}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Change Search
            </button>
          </div>
        </div>
      </div>
      
      <div className="table-container">
        <table className="custom-table" aria-label="customized table">
          <thead>
            <tr>
              <th>Room Type</th>
              <th align="right">Number of guests</th>
              <th align="right">Price</th>
              <th align="right">Your Choice</th>
              <th align="right">Select amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{row.name}</td>
                <td align="right">{row.calories}</td>
                <td align="right">{row.fat}</td>
                <td align="right">{row.carbs}</td>
                <td align="right">
                  <select value={row.amount} onChange={(e) => handleAmountChange(index, e.target.value)}>
                    {[1, 2, 3, 4, 5, 6].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                {index === 0 && (
                  <td>
                    <button>Select</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>

      </div>
    
  );
}

export default Reserve;