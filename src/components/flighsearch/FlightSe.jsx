import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faArrowsAltH,
  faCalendarDays,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { DateRangePicker, DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './flightse.css';

const FlightSearch = () => {
  const [openDatePicker, setOpenDatePicker] = useState(null);
  const [flightType, setFlightType] = useState('Round-trip');
  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    students: 0,
    seniors: 0,
    youths: 0,
    children: 0,
    toddlers: 0,
    infants: 0,
  });
  const [ticketClass, setTicketClass] = useState('Economy');
  const [segments, setSegments] = useState([{ from: '', to: '', startDate: new Date(), endDate: new Date() }]);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Validate segments before proceeding
    const isValid = segments.every(segment => segment.from.trim() !== '' && segment.to.trim() !== '');
    
    if (!isValid) {
      alert('Please fill in all "From" and "To" fields.');
      return;
    }
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      navigate('/flight-data');
    }, 2000); // Simulate loading time of 2 seconds
  };

  const addSegment = () => {
    if (segments.length < 5) {
      setSegments([...segments, { from: '', to: '', startDate: new Date(), endDate: new Date() }]);
    }
  };

  const removeSegment = (index) => {
    if (segments.length > 1) {
      setSegments(segments.filter((_, i) => i !== index));
    }
  };

  const handleSegmentChange = (index, field, value) => {
    const newSegments = segments.map((segment, i) =>
      i === index ? { ...segment, [field]: value } : segment
    );
    setSegments(newSegments);
  };

  const handleDateChange = (index, type, date) => {
    const newSegments = segments.map((segment, i) => {
      if (i === index) {
        if (type === 'start') {
          return { ...segment, startDate: date, endDate: date > segment.endDate ? date : segment.endDate };
        } else {
          return { ...segment, endDate: date };
        }
      }
      return segment;
    });
    setSegments(newSegments);
    setOpenDatePicker(null); // Close date range picker after selection
  };

  const handlePassengerChange = (type, increment) => {
    setPassengerCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (increment) {
        if (type === 'adults' && newCounts.adults < 16) newCounts.adults += 1;
        if (type === 'students' && newCounts.students < 8) newCounts.students += 1;
        if (type === 'seniors' && newCounts.seniors < 8) newCounts.seniors += 1;
        if (type === 'youths' && newCounts.youths < 7) newCounts.youths += 1;
        if (type === 'children' && newCounts.children < 7) newCounts.children += 1;
        if (type === 'toddlers' && newCounts.toddlers < 7) newCounts.toddlers += 1;
        if (type === 'infants' && newCounts.infants < 1) newCounts.infants += 1;
      } else {
        if (type === 'adults' && newCounts.adults > 1) newCounts.adults -= 1;
        if (type !== 'adults' && newCounts[type] > 0) newCounts[type] -= 1;
      }
      return newCounts;
    });
  };

  const togglePassengerDropdown = () => {
    setShowPassengerDropdown((prevState) => !prevState);
  };

  const closePassengerDropdown = () => {
    setShowPassengerDropdown(false);
  };

  const renderSegment = (segment, index) => (
    <div className="flightSegment" key={index}>
      <div className="flightSearchItem">
        <FontAwesomeIcon icon={faPlane} className="flightIcon" />
        <input
          type="text"
          placeholder="From?"
          className="flightSearchInput"
          value={segment.from}
          onChange={(e) => handleSegmentChange(index, 'from', e.target.value)}
        />
      </div>
      <div className="flightSearchItem">
        <FontAwesomeIcon icon={faArrowsAltH} className="flightIcon" />
      </div>
      <div className="flightSearchItem">
        <FontAwesomeIcon icon={faPlane} className="flightIcon" />
        <input
          type="text"
          placeholder="To?"
          className="flightSearchInput"
          value={segment.to}
          onChange={(e) => handleSegmentChange(index, 'to', e.target.value)}
        />
      </div>
      {flightType === 'Round-trip' ? (
        <>
          <div className="flightSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="flightIcon" />
            <input
              type="text"
              placeholder="Start Date"
              readOnly
              className="flightSearchInput"
              value={format(segment.startDate, 'MM/dd')}
              onClick={() => setOpenDatePicker({ type: 'start', index })}
            />
            {openDatePicker?.type === 'start' && openDatePicker.index === index && (
              <DateRangePicker
                ranges={[{ startDate: segment.startDate, endDate: segment.endDate, key: 'selection' }]}
                onChange={(item) => handleDateChange(index, 'start', item.selection.startDate)}
                moveRangeOnFirstSelection={false}
                className="dateRange"
                minDate={new Date()}
                showSelectionPreview={true}
                showDateDisplay={false}
                rangeColors={['#0071c2']}
              />
            )}
          </div>
          <div className="flightSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="flightIcon" />
            <input
              type="text"
              placeholder="End Date"
              readOnly
              className="flightSearchInput"
              value={format(segment.endDate, 'MM/dd')}
              onClick={() => setOpenDatePicker({ type: 'end', index })}
            />
            {openDatePicker?.type === 'end' && openDatePicker.index === index && (
              <DateRangePicker
                ranges={[{ startDate: segment.startDate, endDate: segment.endDate, key: 'selection' }]}
                onChange={(item) => handleDateChange(index, 'end', item.selection.endDate)}
                moveRangeOnFirstSelection={false}
                className="dateRange"
                minDate={segment.startDate}
                showSelectionPreview={true}
                showDateDisplay={false}
                rangeColors={['#0071c2']}
              />
            )}
          </div>
        </>
      ) : (
        <div className="flightSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="flightIcon" />
          <input
            type="text"
            placeholder="Date"
            readOnly
            className="flightSearchInput"
            value={format(segment.startDate, 'MM/dd')}
            onClick={() => setOpenDatePicker(index)}
          />
          {openDatePicker === index && (
            <DateRange
              ranges={[{ startDate: segment.startDate, endDate: segment.startDate, key: 'selection' }]}
              onChange={(item) => handleDateChange(index, 'start', item.selection.startDate)}
              moveRangeOnFirstSelection={false}
              className="dateRange"
              minDate={new Date()}
              showSelectionPreview={true}
              showDateDisplay={false}
              rangeColors={['#0071c2']}
            />
          )}
        </div>
      )}
      {segments.length > 1 && (
        <div className="flightSearchItem">
          <button className="removeSegmentButton" onClick={() => removeSegment(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );

  const renderPassengerDropdown = () => (
    <div className="passengerSelector">
      {Object.keys(passengerCounts).map((type) => (
        <div className="passengerType" key={type}>
          <span>
            {type.charAt(0).toUpperCase() + type.slice(1)}{' '}
            {type === 'adults' ? '18-64' :
              type === 'students' ? 'over 18' :
              type === 'seniors' ? 'over 65' :
              type === 'youths' ? '12-17' :
              type === 'children' ? '2-11' :
              type === 'toddlers' ? 'under 2' : 'under 2'}
          </span>
          <button
            disabled={type === 'adults' ? passengerCounts[type] <= 1 : passengerCounts[type] <= 0}
            onClick={() => handlePassengerChange(type, false)}
          >
            -
          </button>
          <span>{passengerCounts[type]}</span>
          <button
            disabled={
              (type === 'adults' && passengerCounts[type] >= 9) ||
              (type === 'students' && passengerCounts[type] >= 8) ||
              (type === 'seniors' && passengerCounts[type] >= 8) ||
              (type === 'youths' && passengerCounts[type] >= 7) ||
              (type === 'children' && passengerCounts[type] >= 7) ||
              (type === 'toddlers' && passengerCounts[type] >= 7) ||
              (type === 'infants' && passengerCounts[type] >= 1)
            }
            onClick={() => handlePassengerChange(type, true)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );

  const renderPassengerInput = () => (
    <div className="dropdown">
      <div className="passengerInput" onClick={togglePassengerDropdown}>
        {`${Object.values(passengerCounts).reduce((a, b) => a + b)} travelers`}
      </div>
      {showPassengerDropdown && (
        <div className="dropdownContent">
          {renderPassengerDropdown()}
        </div>
      )}
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        closePassengerDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isSearchButtonDisabled = segments.some(segment => !segment.from || !segment.to || !segment.startDate || (flightType === 'Round-trip' && !segment.endDate));

  return (
    <div className="flightSearchContainer">
      <h1 className="flightSearchTitle">Search hundreds of flight sites at once.</h1>
      <div className="flightSearch">
        <div className="dropdowns">
          <select value={flightType} onChange={(e) => setFlightType(e.target.value)} className="dropdown">
            <option>One-way</option>
            <option>Round-trip</option>
            <option>Multi-city</option>
          </select>
          {renderPassengerInput()}
          <select value={ticketClass} onChange={(e) => setTicketClass(e.target.value)} className="dropdown">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
        {flightType === 'Multi-city' ? (
          <>
            {segments.map((segment, index) => renderSegment(segment, index))}
            {segments.length < 5 && (
              <button className="addSegmentButton" onClick={addSegment}>
                Add Segment
              </button>
            )}
          </>
        ) : (
          renderSegment(segments[0], 0)
        )}
        <div className="flightSearchItem">
          <button className="searchButton" onClick={handleSearch} disabled={isSearchButtonDisabled || isSearching}>
            {isSearching ? 'Loading...' : 'Search'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
