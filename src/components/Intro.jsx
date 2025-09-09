import React from 'react';
import './Intro.css';

function Intro({ bio, details }) {
  return (
    <div className="intro-card">
      <h2>Details</h2>
      <p className="bio">{bio}</p>
      <ul className="details-list">
        {details.map((detail, index) => (
          <li key={index}><i className="fas fa-info-circle"></i> {detail}</li>
        ))}
      </ul>
      <button className="edit-details-button">Edit Details</button>
      <button className="add-hobbies-button">Add Hobbies</button>
      <button className="add-featured-button">Add Featured</button>
    </div>
  );
}

export default Intro;