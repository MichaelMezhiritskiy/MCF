import React from 'react'
import FavoritesSelector from './FavoritesSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../reducers/favoriteSlice';
import { submitUsername } from '../reducers/userNameSlice';

function FavNavBar() {
    const username = useSelector(state => state.setUser.username);
    const checkState = useSelector(state => state.changeFav.favorites);
    const navigate = useNavigate();
    const navToFavs = () => navigate('../favDisplay', { replace: true } );
    const navToSign = () => navigate('../log', { replace: true });
    const dispatch = useDispatch();

    const handleSelectFavorites = () => {
        fetch('../storeFavs', {
            method: 'POST',
            body: JSON.stringify( { username: username, favorites: checkState } ),
            headers: { 'Content-Type' : 'application/json' },
        })
        .then(() => {
            dispatch(reset());
        })
        .then(() => {
            return navToFavs();
        })
        .catch(err => console.log(err));

    };
    

    const handleReset = () => {
        dispatch(reset());
        window.location.reload(false);
    };

    const handleLogout = () => {
        dispatch(submitUsername(', you are not logged in'))
        return navToSign();
    };
 

  return (
    <div>
        <div clasName="nav" style={{height: '75px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        SELECT YOUR FAVORITE COINS {username}!!
        <button onClick={handleSelectFavorites}>SELECT FAVORITES</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <FavoritesSelector />
    </div>
  )
}

export default FavNavBar;