import React from 'react'

function Login() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>LOGIN PAGE</h1>
      <div>
        <h2>USERNAME: <input></input><button>SUBMIT</button></h2>
        <div>
        <h2>PASSWORD: <input></input><button>SUBMIT</button></h2>
      </div>
      </div>
    </div>
  )
}

export default Login;