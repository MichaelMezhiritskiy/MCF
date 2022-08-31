import React, { Component } from 'react'
import NavBar from './NavBar'
import CoinDisplay from './CoinDisplay';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    {/* <Router> */}
      {/* <NavBar /> */}
    {/* </Router> */}
    <Login />
      {/* <CoinDisplay /> */}
    
    </> 
  )
};

//todo
//have the login page setup
//redux toolkit



//  <>
//     <NavBar />
//     <CoinDisplay />
// </> 

// <Routes>
//       <Route path="/" element={<NavBar />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
// </Routes>