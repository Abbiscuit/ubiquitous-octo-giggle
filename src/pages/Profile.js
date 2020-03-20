import React from 'react';

import ProfileFeed from '../components/ProfileFeed';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileCard />
      <ProfileFeed />
    </div>
  );
};

export default Profile;
