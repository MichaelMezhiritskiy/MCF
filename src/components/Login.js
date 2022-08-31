import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice'

function Login() {
  
  const handleSubmit = (e) => {
    fetch(`../login?username=${document.getElementById('user1').value}&password=${document.getElementById('pass1').value}`)
    //redirect to main page with welcome: username
    //change username state to user
  }
  
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>LOGIN PAGE</h1>
      <h1>CURRENT USERNAME STATE: {username}</h1>
      <div>
        <h2>USERNAME: <input type="text" id="user1"></input></h2>
        <div>
        <h2>PASSWORD: <input type="text" id="pass1"></input><button onClick={(e) => handleSubmit(e)}>SUBMIT</button></h2>
      </div>
      </div>
    </div>
  )
}

export default Login;