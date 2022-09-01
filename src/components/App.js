import React, { Component } from 'react'
import NavBar from './NavBar'
import Signup from './Signup';
import Login from './Login';
import Favorites from './Favorites';
import FavNavBar from './FavNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={< NavBar /> } />
            <Route path="/sign" element={ <Signup /> } />
            <Route path="/log" element={ <Login /> } />
            <Route path="/favDisplay" element={ <Favorites /> } />
            <Route path="/pickFavs" element={ <FavNavBar /> } />
        </Routes>
     </div>
  )
};
