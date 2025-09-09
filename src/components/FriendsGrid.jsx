import React from 'react';
import './FriendsGrid.css';

function FriendsGrid({ friends }) {
  return (
    <div className="friends-card">
      <h2>Friends</h2>
      <p className="friends-count">{friends.length} friends</p>
      <div className="friend-grid">
        {friends.map(friend => (
          <div key={friend.id} className="friend-item">
            <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
            <span className="friend-name">{friend.name}</span>
          </div>
        ))}
      </div>
      <button className="see-all-friends-button">See all friends</button>
    </div>
  );
}

export default FriendsGrid;