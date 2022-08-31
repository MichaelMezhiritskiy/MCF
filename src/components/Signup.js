import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice';

const Signup = () => {

  const handleSubmit = (e) => {
    fetch('../signup', {
      method: 'POST',
      body: JSON.stringify( { username: document.getElementById('user').value, password: document.getElementById('pass').value } ),
      headers: { 'Content-Type' : 'application/json' },
      // redirect to landing page with welcome: username 
      // change username state to user
    })

  };
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>SIGNUP PAGE</h1>
      <h1>CURRENT USERNAME STATE:</h1>
      <div>
        <h2>USERNAME: <input type="text" id="user"></input></h2>
        <div>
        <h2>PASSWORD: <input type="text" id="pass"></input><button onClick={(e) => handleSubmit(e)}>SUBMIT</button></h2>
      </div>
      </div>
    </div>
  )
}

export default Signup;