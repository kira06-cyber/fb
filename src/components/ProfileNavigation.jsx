import React from 'react';
import './ProfileNavigation.css';

function ProfileNavigation() {
  return (
    <nav className="profile-navigation">
      <ul className="nav-links">
        <li><a href="#" className="active">Posts</a></li>
        <li><a href="#">Photos</a></li>
        <li><a href="#">Reels</a></li>
      </ul>
    </nav>
  );
}

export default ProfileNavigation;