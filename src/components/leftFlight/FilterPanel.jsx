import React, { useState } from 'react';
import './filterPanel.css';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const FilterPanel = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const marks = [
        { value: 0, label: '0h' },
        { value: 5, label: '5h' },
        { value: 10, label: '10h' },
        { value: 15, label: '15h' },
        { value: 20, label: '20h' },
        { value: 24, label: '24h' },
    ];

    const formatLabel = (value) => {
        const mark = marks.find((mark) => mark.value === value);
        return mark ? mark.label : '';
    };

    return (
        <div className="filter-panel">
            <div className="advice">
                <h3>Our Advice</h3>
                <p>Buy now</p>
                <span>Prices are unlikely to decrease within 7 days</span>
            </div>
            {[
                'Stops',
                'Times',
                'Airlines',
                'Airports',
                'Duration',
                'Fee Assistant',
                'Price',
                'Cabin',
                'Layover airports',
                'Flight quality',
                'Aircraft',
            ].map((section) => (
                <div key={section} className="filter-section">
                    <div className="filter-header" onClick={() => toggleSection(section)}>
                        <h4>{section}</h4>
                        <span>{openSections[section] ? '-' : '+'}</span>
                    </div>
                    {openSections[section] && (
                        <div className="filter-options">
                            {section === 'Stops' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="non-stop" /> Non-stop
                                    </label>
                                    <label>
                                        <input type="checkbox" name="1-stop" /> 1 Stop
                                    </label>
                                    <label>
                                        <input type="checkbox" name="2-plus-stops" /> 2+ Stops
                                    </label>
                                </>
                            )}
                            {section === 'Times' && (
                                <>
                                    <div>
                                        <label>Take-off Cairo (CAI)</label>
                                        <Slider
                                            defaultValue={[0, 24]}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={formatLabel}
                                            step={null}
                                            min={0}
                                            max={24}
                                        />
                                    </div>
                                    <div>
                                        <label>Take-off Hurghada (HRG)</label>
                                        <Slider
                                            defaultValue={[0, 24]}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={formatLabel}
                                            step={null}
                                            min={0}
                                            max={24}
                                        />
                                    </div>
                                    <div>
                                        <label>Landing Hurghada (HRG)</label>
                                        <Slider
                                            defaultValue={[0, 24]}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={formatLabel}
                                            step={null}
                                            min={0}
                                            max={24}
                                        />
                                    </div>
                                    <div>
                                        <label>Landing Cairo (CAI)</label>
                                        <Slider
                                            defaultValue={[0, 24]}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={formatLabel}
                                            step={null}
                                            min={0}
                                            max={24}
                                        />
                                    </div>
                                </>
                            )}
                            {section === 'Airlines' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="airline1" /> Aegean Airlines
                                    </label>
                                    <label>
                                        <input type="checkbox" name="airline2" /> Air Cairo

                                    </label>
                                    <label>
                                        <input type="checkbox" name="airline3" /> AlMasria Airlines

                                    </label>
                                    <label>
                                        <input type="checkbox" name="airline4" /> Egypt Air

                                    </label>
                                    <label>
                                        <input type="checkbox" name="airline5" /> flyadeal
                                    </label>
                                    <label>
                                        <input type="checkbox" name="airline6" /> flynas
                                    </label>
                                </>
                            )}
                            {section === 'Airports' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="airport1" /> CAI: Cairo
                                    </label>
                                    <label>
                                        <input type="checkbox" name="airport2" /> SSH: Ophira
                                    </label>
                                  
                                </>
                            )}
                            {section === 'Duration' && (
                                <>
                                    <div>
                                        <label>Flight leg</label>
                                        <Slider
                                            defaultValue={[0, 10]}
                                            aria-labelledby="range-slider"
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={formatLabel}
                                            step={1}
                                            min={0}
                                            max={24}
                                        />
                                    </div>
                                    <div>
                                        <label>Layover</label>
                                        <Slider
                                            defaultValue={[0, 10]}
                                            aria-labelledby="range-slider"
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={formatLabel}
                                            marks={marks}
                                            min={0}
                                            max={24}
                                        />
                                    </div>
                                </>
                            )}
                            {section === 'Fee Assistant' && (
                                <>
                                    <label>Carry-on bag</label> 

                                    <Select
                                        defaultValue=""
                                        style={{ minWidth: 120 }}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Select Bag' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Select Bag(0)
                                        </MenuItem>
                                        <MenuItem value="carry-on">0 Bags</MenuItem>
                                        <MenuItem value="checked">1 Bag</MenuItem>
                                    </Select>
                                    <label>Checked bag </label>
                                    <Select
                                        defaultValue=""
                                        style={{ minWidth: 120 }}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Select Bag' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Select Bag(0)
                                        </MenuItem>
                                        <MenuItem value="carry-on">0 Bags</MenuItem>
                                        <MenuItem value="checked">1 Bag</MenuItem>
                                    </Select>
                                </>
                            )}
                            {section === 'Price' && (
                                <>
                                    <Slider
                                        defaultValue={[0, 1000]}
                                        aria-labelledby="range-slider"
                                        valueLabelDisplay="auto"
                                        marks={[
                                            { value: 0, label: '0' },
                                            { value: 200, label: '200' },
                                            { value: 400, label: '400' },
                                            { value: 600, label: '600' },
                                            { value: 800, label: '800' },
                                            { value: 1000, label: '1000' },
                                        ]}
                                        step={100}
                                        min={0}
                                        max={1000}
                                    />
                                </>
                            )}
                            {section === 'Cabin' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="cabin1" /> Basic Economy
                                    </label>
                                    <label>
                                        <input type="checkbox" name="cabin2" /> Economy
                                    </label>
                                    <label>
                                        <input type="checkbox" name="cabin3" /> Mixed
                                    </label>
                                </>
                            )}
                            {section === 'Layover airports' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="layover-airport1" /> Layover Airport 1
                                    </label>
                                    <label>
                                        <input type="checkbox" name="layover-airport2" /> Layover Airport 2
                                    </label>
                                </>
                            )}
                            {section === 'Flight quality' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="flight-quality1" /> Show Wi-Fi flights only
                                    </label>
                                    <label>
                                        <input type="checkbox" name="flight-quality2" /> Show Hacker Fares¹
                                    </label>
                                    <label>
                                        <input type="checkbox" name="flight-quality3" /> Show red-eyes
                                    </label>
                                    <label>
                                        <input type="checkbox" name="flight-quality4" /> Show 208 longer flights
                                    </label>
                                    <label>
                                        <input type="checkbox" name="flight-quality5" /> Show flights with self-transfers
                                    </label>
                                </>
                            )}
                            {section === 'Aircraft' && (
                                <>
                                    <label>
                                        <input type="checkbox" name="aircraft1" /> Narrow-body
                                    </label>
                                    <label>
                                        <input type="checkbox" name="aircraft2" /> Other
                                    </label>
                                    <label>
                                        <input type="checkbox" name="aircraft3" /> Turbo-prop plan
                                    </label>
                                </>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FilterPanel;
