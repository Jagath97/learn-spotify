import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../actions/userdetails';

function Details() {
  // const [user, setUser] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    resolveUrl().then(response => {
      // setUser(response.email);
      dispatch(update(response));
    });
    return () => {};
  }, [dispatch]);

  const userName = useSelector(state => state.user.name);
  const userEmail = useSelector(state => state.user.email);

  return (
    <div>
      <p>Your Spotify</p>
      <p>{userName}</p>
      <p>{userEmail}</p>
      {/* <p>{user}</p> */}
    </div>
  );
}

async function resolveUrl() {
  const url = new URL(window.location.href.replace('#', '?'));
  let token = url.searchParams.get('access_token');
  const resp = await fetch('https://api.spotify.com/v1/me', {
    headers: { Authorization: 'Bearer ' + token }
  });
  let data = await resp.json();
  console.log(data);
  return data;
}

export default Details;
