import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import './PostsSection.css';

function PostsSection({ posts }) {
  return (
    <div className="posts-section">
      <CreatePost />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsSection;