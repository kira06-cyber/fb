import React from 'react';
import './ProfileCover.css';

function ProfileCover({ coverPhoto, profilePicture, userName }) {
  return (
    <div className="profile-cover-area">
      <div className="cover-photo-container">
        <img src={coverPhoto} alt="Cover" className="cover-photo" />
      </div>
      <div className="profile-info-section">
        <div className="profile-picture-container">
          <img src={profilePicture} alt={userName} className="profile-picture-large" />
        </div>
        <div className="user-details">
          <h1>{userName}</h1>
          <p>6 friends</p>
        </div>
        <div className="profile-actions">
          <button className="add-story-button"><i className="fas fa-plus-circle"></i> Add to Story</button>
          <button className="edit-profile-button"><i className="fas fa-edit"></i> Edit Profile</button>
          <button className="edit-profile-button"><i className="fas fa-ellipsis-h"></i></button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCover;