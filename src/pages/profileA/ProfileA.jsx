import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './profileA.css';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
  "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", 
  "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", 
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", 
  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
  "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", 
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
  "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", 
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const ProfileA = () => {
  const [isEditing, setIsEditing] = useState({
    name: false,
    displayName: false,
    email: false,
    phoneNumber: false,
    dob: false,
    nationality: false,
    gender: false,
    address: false,
    passport: false,
  });

  const [profileData, setProfileData] = useState({
    name: { first: 'Ahmed', last: 'Mohamed' },
    displayName: 'Choose a display name',
    email: 'ahmedreda888qq@gmail.com',
    phoneNumber: 'Add your phone number',
    dob: { month: '', day: '', year: '' },
    nationality: '',
    gender: 'Select your gender',
    address: { country: '', street: '', city: '', zip: '' },
    passport: { firstName: '', lastName: '', country: '', number: '', expiration: { month: '', day: '', year: '' } },
  });

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleInputChange = (field, subfield, value) => {
    setProfileData({
      ...profileData,
      [field]: typeof profileData[field] === 'object' ? { ...profileData[field], [subfield]: value } : value,
    });
  };

  const handleSaveClick = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleCancelClick = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="profile-details-container">
        <div className="profile-sidebar">
          <ul>
            <li><Link to="/manage" className="active">Personal details</Link></li>
            <li><Link to="/pref">Preferences</Link></li>
            <li><Link to="/psec">Security</Link></li>
            <li><Link to="/ppay">Payment details</Link></li>
            <li><Link to="/ppriv">Privacy</Link></li>
            <li><Link to="/pemail">Email notifications</Link></li>
            <li><Link to="/pother">Other travelers</Link></li>
          </ul>
        </div>
        <div className="profile-content">
          <h2>Personal details</h2>
          <p>Update your info and find out how it's used.</p>
          <div className="profile-info">
            <div className="profile-info-item">
              <span className="profile-info-label">Name</span>
              {isEditing.name ? (
                <div className="profile-info-editing">
                  <input
                    type="text"
                    value={profileData.name.first}
                    onChange={(e) => handleInputChange('name', 'first', e.target.value)}
                    placeholder="First name(s)"
                  />
                  <input
                    type="text"
                    value={profileData.name.last}
                    onChange={(e) => handleInputChange('name', 'last', e.target.value)}
                    placeholder="Last name(s)"
                  />
                  <button onClick={() => handleSaveClick('name')} className="profile-info-save">Save</button>
                  <button onClick={() => handleCancelClick('name')} className="profile-info-cancel">Cancel</button>
                </div>
              ) : (
                <>
                  <span className="profile-info-value">{profileData.name.first} {profileData.name.last}</span>
                  <a href="#" onClick={() => handleEditClick('name')} className="profile-info-edit">Edit</a>
                </>
              )}
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Date of birth</span>
              {isEditing.dob ? (
                <div className="profile-info-editing">
                  <select
                    value={profileData.dob.month}
                    onChange={(e) => handleInputChange('dob', 'month', e.target.value)}
                  >
                    <option value="">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <input
                    type="text"
                    value={profileData.dob.day}
                    onChange={(e) => handleInputChange('dob', 'day', e.target.value)}
                    placeholder="DD"
                  />
                  <input
                    type="text"
                    value={profileData.dob.year}
                    onChange={(e) => handleInputChange('dob', 'year', e.target.value)}
                    placeholder="YYYY"
                  />
                  <button onClick={() => handleSaveClick('dob')} className="profile-info-save">Save</button>
                  <button onClick={() => handleCancelClick('dob')} className="profile-info-cancel">Cancel</button>
                </div>
              ) : (
                <>
                  <span className="profile-info-value">{profileData.dob.month} {profileData.dob.day}, {profileData.dob.year}</span>
                  <a href="#" onClick={() => handleEditClick('dob')} className="profile-info-edit">Edit</a>
                </>
              )}
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Nationality</span>
              {isEditing.nationality ? (
                <div className="profile-info-editing">
                  <select
                    value={profileData.nationality}
                    onChange={(e) => handleInputChange('nationality', null, e.target.value)}
                  >
                    <option value="">Select the country/region you're from</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <button onClick={() => handleSaveClick('nationality')} className="profile-info-save">Save</button>
                  <button onClick={() => handleCancelClick('nationality')} className="profile-info-cancel">Cancel</button>
                </div>
              ) : (
                <>
                  <span className="profile-info-value">{profileData.nationality}</span>
                  <a href="#" onClick={() => handleEditClick('nationality')} className="profile-info-edit">Edit</a>
                </>
              )}
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Address</span>
              {isEditing.address ? (
                <div className="profile-info-editing">
                  <select
                    value={profileData.address.country}
                    onChange={(e) => handleInputChange('address', 'country', e.target.value)}
                  >
                    <option value="">Select the country/region you live in</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={profileData.address.street}
                    onChange={(e) => handleInputChange('address', 'street', e.target.value)}
                    placeholder="Your street name and house/apartment number"
                  />
                  <input
                    type="text"
                    value={profileData.address.city}
                    onChange={(e) => handleInputChange('address', 'city', e.target.value)}
                    placeholder="Town/City"
                  />
                  <input
                    type="text"
                    value={profileData.address.zip}
                    onChange={(e) => handleInputChange('address', 'zip', e.target.value)}
                    placeholder="Zip code"
                  />
                  <button onClick={() => handleSaveClick('address')} className="profile-info-save">Save</button>
                  <button onClick={() => handleCancelClick('address')} className="profile-info-cancel">Cancel</button>
                </div>
              ) : (
                <>
                  <span className="profile-info-value">{profileData.address.street}, {profileData.address.city}, {profileData.address.zip}</span>
                  <a href="#" onClick={() => handleEditClick('address')} className="profile-info-edit">Edit</a>
                </>
              )}
            </div>

            <div className="profile-info-item">
              <span className="profile-info-label">Passport details</span>
              {isEditing.passport ? (
                <div className="profile-info-editing">
                  <input
                    type="text"
                    value={profileData.passport.firstName}
                    onChange={(e) => handleInputChange('passport', 'firstName', e.target.value)}
                    placeholder="First name(s)"
                  />
                  <input
                    type="text"
                    value={profileData.passport.lastName}
                    onChange={(e) => handleInputChange('passport', 'lastName', e.target.value)}
                    placeholder="Last name(s)"
                  />
                  <select
                    value={profileData.passport.country}
                    onChange={(e) => handleInputChange('passport', 'country', e.target.value)}
                  >
                    <option value="">Select issuing country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={profileData.passport.number}
                    onChange={(e) => handleInputChange('passport', 'number', e.target.value)}
                    placeholder="Passport number"
                  />
                  <select
                    value={profileData.passport.expiration.month}
                    onChange={(e) => handleInputChange('passport', 'expiration.month', e.target.value)}
                  >
                    <option value="">MM</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <input
                    type="text"
                    value={profileData.passport.expiration.day}
                    onChange={(e) => handleInputChange('passport', 'expiration.day', e.target.value)}
                    placeholder="DD"
                  />
                  <input
                    type="text"
                    value={profileData.passport.expiration.year}
                    onChange={(e) => handleInputChange('passport', 'expiration.year', e.target.value)}
                    placeholder="YYYY"
                  />
                  <button onClick={() => handleSaveClick('passport')} className="profile-info-save">Save</button>
                  <button onClick={() => handleCancelClick('passport')} className="profile-info-cancel">Cancel</button>
                </div>
              ) : (
                <>
                  <span className="profile-info-value">{profileData.passport.firstName} {profileData.passport.lastName}, {profileData.passport.country}, {profileData.passport.number}, {profileData.passport.expiration.month}/{profileData.passport.expiration.day}/{profileData.passport.expiration.year}</span>
                  <a href="#" onClick={() => handleEditClick('passport')} className="profile-info-edit">Edit</a>
                </>
              )}
            </div>

            {/* Add other profile fields similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileA;
