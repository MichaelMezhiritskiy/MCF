import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const navToSign = () => navigate('../sign', { replace: true })
  const navToFavs = () => navigate('../favDisplay', { replace: true });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    fetch(`../login?username=${document.getElementById('user1').value}&password=${document.getElementById('pass1').value}`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      if (response.boo) {
        dispatch(submitUsername(response.name));
        return navToFavs();
      } 
      return navToSign(); 
    })
    .catch((err) => console.log(err));
  }

  const handleSignup = () => {
    return navToSign();
  }

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