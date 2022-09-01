import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submitUsername } from '../reducers/userNameSlice';
import Coin from './Coin';

function Favorites() {
  const [selection, setSelection] = useState([]);
  const username = useSelector(state => state.setUser.username);
  const navigate =  useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const finalList = [];
    fetch(`../storeFavs?username=${username}`)
    .then(response => response.json())
    // .then(response => console.log(response.favorites))
    .then((response) => {
      // let data = response.favorites.join(',')
      console.log(response.favorites);
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${response.favorites.join()}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        for (const element of data) {
          finalList.push(<Coin logo={element.image} name={element.id} marketCap={element.market_cap} price={element.current_price} />)
        }
        setSelection(finalList);
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  },[])


  const navToLogin = () => navigate('../log', { replace: true });

  const handleLogout = (e) => {
    dispatch(submitUsername('bruh'));
    return navToLogin();
  };

  const navToSelector = () => navigate('../pickFavs', { replace: true });

  const handleReSelect = (e) => {
    console.log('u clicked me');
    return navToSelector();
  };

  const navToHome = () => navigate('../', { replace: true });

  const handleDelete = () => {
    fetch(`../login?username=${username}`, { method: 'DELETE' })
    .then(() => console.log('delete successful'))
    .then(() => {
      dispatch(submitUsername('bruh, you just deleted your account'));
    })
    .catch(err => console.log(err));
    return navToHome();
  }

  return (
    <div>
      <div clasName="nav" style={{height: '75px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        WELCOME {username}!
        <button onClick={handleReSelect}>RE-SELECT FAVORITES</button>
        <button onClick={handleDelete}>DELETE ACCOUNT</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
        {selection}
    </div>
  )
}

export default Favorites