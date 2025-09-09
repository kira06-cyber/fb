import React from 'react';
import './Header.css';

function Header({ userName, profilePicture }) {
  return (
    <header className="header">
      <div className="header-desktop">
        <div className="header-left">
          <div className="facebook-logo">f</div>
          <input type="text" placeholder="Search Facebook" className="search-input" />
        </div>
        <div className="header-right">
          <div className="header-profile-link">
            <img src={profilePicture} alt={userName} className="header-profile-picture" />
            <span>{userName.split(' ')[0]}</span>
          </div>
          <div className="header-icon-button">
            <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-icon-button">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="header-icon-button">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;