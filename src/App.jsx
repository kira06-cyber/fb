import React from 'react';
import Header from './components/Header';
import ProfileCover from './components/ProfileCover';
import ProfileNavigation from './components/ProfileNavigation';
import Intro from './components/Intro';
import PostsSection from './components/PostsSection';
import FriendsGrid from './components/FriendsGrid';
import './App.css';

function App() {
  const userData = {
    name: 'Danna Lei',
    profilePicture: 'profile.jpg',
    coverPhoto: 'cover.jpg',
    bio: 'get off man!#/!',
    details: [
      'Lives in Osaka Japan',
      'From Pagadian',
      'Followed by 6 people'
    ],
    friends: [
      { id: 1, name: 'Ali', avatar: './friends/f1.jpg' },
      { id: 2, name: 'Bea', avatar: './friends/f2.jpg' },
      { id: 3, name: 'Jellybean', avatar: './friends/f3.jpg' },
      { id: 4, name: 'Janei', avatar: './friends/f4.jpg' },
      { id: 5, name: 'Bebelone', avatar: './friends/f5.jpg' },
      { id: 6, name: 'Paulerss', avatar: './friends/f6.jpg' },
    ],
    posts: [
      {
        id: 1,
        author: 'Danna Lei',
        authorAvatar: 'profile.jpg',
        timestamp: '1 hour ago',
        content: "Heloo,welcome to my world~",
        image: './posts/post2.jpg'
      },
      {
        id: 2,
        author: 'Danna Lei',
        authorAvatar: 'profile.jpg',
        timestamp: '5 hours ago',
        content: "d ko na kaya. send help!!",
        image: './posts/post1.jpg'
      }
    ]
  };

  return (
    <div className="App">
      <Header userName={userData.name} profilePicture={userData.profilePicture} />
      <div className="profile-container">
        <ProfileCover coverPhoto={userData.coverPhoto} profilePicture={userData.profilePicture} userName={userData.name} />
        <ProfileNavigation />
        <div className="profile-content">
          <div className="profile-sidebar">
            <Intro bio={userData.bio} details={userData.details} />
            <FriendsGrid friends={userData.friends} />
          </div>
          <div className="profile-main-content">
            <PostsSection posts={userData.posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;