import React from 'react';

const Favorites = ({ currentUser }) => {
  return (
    <div style={{ padding: '0 10px' }}>
      <h3>{currentUser.displayName}さんのお気に入りページ</h3>
      <p>※現在ページ作成中</p>
    </div>
  );
};

export default Favorites;
