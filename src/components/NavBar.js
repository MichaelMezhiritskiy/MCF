import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoinDisplay from './CoinDisplay';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const navigate = useNavigate();
  const navigateLogin = () => navigate('log');
  const username = useSelector(state => state.setUser.username);
  return (
    <div> 
      <div clasName="nav" style={{height: '75px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        WELCOME {username}!
        <button style={{marginLeft: '25%'}} onClick={navigateLogin}>LOGIN</button>
        <button style={{marginLeft: '5%'}} onClick={() => navigate('/sign')}>SIGNUP</button>
      </div>
      <CoinDisplay />
    </div>
  )
}