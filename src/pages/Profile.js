import React from 'react';

import ProfileFeed from '../components/ProfileFeed';
import ProfileCard from '../components/ProfileCard';

const Profile = props => {
  const { displayName } = props.currentUser;
  return (
    <div className="profile">
      <ProfileCard displayName={displayName} />
      <ProfileFeed />
    </div>
  );
};

export default Profile;
