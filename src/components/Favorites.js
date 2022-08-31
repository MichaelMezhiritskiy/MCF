import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice';

function Favorites() {
  const username = useSelector(state => state.setUser.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navToLogin = navigate('../log', { replace: true });
  const handleLogout = (e) => {
    dispatch(submitUsername('bruh'));
    return navToLogin();
  };

  const navToSelector = navigate('../pickFavs', { replace: true });
  const handleReSelect = (e) => {
    console.log('u clicked me');
    return navToSelector();
  };

  return (
    <div>
      <div clasName="nav" style={{height: '75px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        WELCOME {username}!
        <button onClick={handleLogout}>LOGOUT</button>
        <button onClick={handleReSelect}>RE-SELECT FAVORITES</button>
      </div>
    </div>
  )
}

export default Favorites