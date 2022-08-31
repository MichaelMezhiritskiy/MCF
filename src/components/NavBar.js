import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export default function NavBar() {



  return (
    <div> 
      <div clasName="nav" style={{height: '100px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        NavBar
        <button style={{marginLeft: '25%'}}></button>
        <button style={{marginLeft: '5%'}}>SIGNUP</button>
      </div>
    </div>
  )
}

//style={{height: '100px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}