import React from 'react';
import { useSelector } from 'react-redux';

function Sample() {
  const userName = useSelector(state => state.user.name);
  return (
    <div>
      <p>This is a sample route</p>
      <p>User {userName} </p>
    </div>
  );
}

export default Sample;
