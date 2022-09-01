import React from 'react'
import { useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const navToFavs = () => navigate('../favDisplay', { required: true });
  const navToSign = () => navigate('../sign', { required: true } );
  const navigateLogin = () => navigate('../log', { required: true } );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    fetch('../signup', {
      method: 'POST',
      body: JSON.stringify( { username: document.getElementById('user').value, password: document.getElementById('pass').value } ),
      headers: { 'Content-Type' : 'application/json' },
    })
    .then(() => {
      dispatch(submitUsername(document.getElementById('user').value))
      return navToFavs();
    })
    .catch((err) => {
      console.log(err);
      return navToSign();
    });
  };

  const handleAlready = () => {
    return navigateLogin();
  }
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>SIGNUP PAGE</h1>
      <h1>CURRENT USERNAME STATE:</h1>
      <div>
        <h2>USERNAME: <input type="text" id="user"></input></h2>
        <div>
        <h2>PASSWORD: <input type="text" id="pass"></input></h2>
        <button onClick={handleAlready}>Already have an account? Log in</button>
        <button onClick={handleSubmit} style={{marginLeft: '15%'}}>SUBMIT</button>
      </div>
      </div>
    </div>
  )
}

export default Signup;