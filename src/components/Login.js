import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const navToSign = () => navigate('../sign', { replace: true })
  const navToFavs = () => navigate('../favDisplay', { replace: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`../login?username=${document.getElementById('user1').value}&password=${document.getElementById('pass1').value}`)
    .then(() => {
      dispatch(submitUsername(document.getElementById('user1').value));
      return navToFavs();
    })
    .catch((err) => {
      console.log(err);
      return navToSign();
    });
    //redirect to main page with welcome: username
    //change username state to user
    // dispatch(submitUsername(document.getElementById('user1').value))
  }

  const handleSignup = (e) => {
    return navToSign();
  }

  const dispatch = useDispatch();
  const username = useSelector(state => state.setUser.username);

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>LOGIN PAGE</h1>
      <h1>CURRENT USERNAME STATE: {username}</h1>
      <div>
        <h2>USERNAME: <input type="text" id="user1"></input></h2>
        <div>
        <h2>PASSWORD: <input type="text" id="pass1"></input></h2>
        <button onClick={handleSignup} style={{marginLeft: '5%'}}>SIGN UP</button>
        <button onClick={handleSubmit} style={{marginLeft: '50%'}}>SUBMIT</button>
      </div>
      </div>
    </div>
  )
}

export default Login;