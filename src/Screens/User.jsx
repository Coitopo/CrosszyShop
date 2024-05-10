import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCamera, faSave, faPhone, faMapLocationDot, faPersonWalkingWithCane } from '@fortawesome/free-solid-svg-icons';
import './User.css';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const User = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
    phoneNumber: '',
    photo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo({ ...userInfo, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {

    console.log('User information saved:', userInfo);
    alert('User information saved successfully!');

  };

  return (
    <div className="user-container">
      <h2 className="title">User Information</h2>
      <div className="user-info">
        <div className="user-avatar">
          {userInfo.photo ? (
            <img src={userInfo.photo} alt="User Avatar" />
          ) : (
            <FontAwesomeIcon icon={faUser} size="6x" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            id="photo-upload"
          />
          <label htmlFor="photo-upload">
            <FontAwesomeIcon icon={faCamera} />
          </label>
        </div>
        <div className="user-details">
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faPersonWalkingWithCane} />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={userInfo.age}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faPhone} />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={userInfo.phoneNumber}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>
      </div>
      <button onClick={handleSave} className="save-button">
        <FontAwesomeIcon icon={faSave} /> Save
      </button>
      <footer>
      <div className="container">
        <div className="footer-content">
          <div className="crosszy-text">
            <h3 style={{ color: 'purple' }}>CROSSZY</h3>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/XCrosszy" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
            <a href="https://www.instagram.com/omar_logem?igsh=MXVmdzkyMDZwZzJkag==" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
            <a href="https://www.tiktok.com/@xcrosszyy?_t=8mCe1yUplHZ&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok className="social-icon" /></a>
            <a href="https://youtube.com/@crosszy79?si=xQemuynt29OhcR7u" target="_blank" rel="noopener noreferrer"><FaYoutube className="social-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default User;


