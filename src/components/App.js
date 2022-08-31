import React, { Component } from 'react'
import NavBar from './NavBar'
import CoinDisplay from './CoinDisplay';
import Signup from './Signup';
import Login from './Login';
import FavoritesSelector from './FavoritesSelector';
import Favorites from './Favorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={< NavBar /> } />
            <Route path="/sign" element={ <Signup /> } />
            <Route path="/log" element={ <Login /> } />
            <Route path="/favDisplay" element={ <Favorites /> } />
            <Route path="/pickFavs" element={ <FavoritesSelector /> } />
        </Routes>
     </div>
  )
};

//todo
//have the login page setup
//redux toolkit
//when finished clean up file organization


//  <>
//     <NavBar />
//     <CoinDisplay />
// </> 

{/* <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
 </Routes> */}