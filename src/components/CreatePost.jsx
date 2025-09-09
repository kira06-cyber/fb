import React from 'react';
import './CreatePost.css';

function CreatePost() {
  return (
    <div className="create-post-card">
      <div className="create-post-top">
        <img src="profile.jpg" alt="Danna" className="create-post-avatar" />
        <input type="text" placeholder="What's on your mind, Danna?" className="create-post-input" />
      </div>
      <div className="create-post-bottom">
        <button className="create-post-button"><i className="fas fa-video video-icon"></i> Live Video</button>
        <button className="create-post-button"><i className="fas fa-images photo-icon"></i> Photo/Video</button>
        <button className="create-post-button"><i className="fas fa-grin-alt feeling-icon"></i> Feeling</button>
      </div>
    </div>
  );
}

export default CreatePost;