import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite, reset } from '../reducers/favoriteSlice';

const SelectCoin = props => {
  let checkState = useSelector(state => state.changeFav.favorites);
  
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    
    if (!clicked) {
      dispatch(addFavorite(props.name));
      document.getElementById(String(props.kei)).style.backgroundColor = 'green';
      setClicked(true);
    } else {
      dispatch(removeFavorite(props.name));
      document.getElementById(String(props.kei)).style.backgroundColor = 'white';
      setClicked(false);
    }
    setTimeout(console.log(checkState), 0);
  };
  
  return (
    <div id={props.kei} style={{display: 'flex', justifyContent:'space-evenly', border:'2px solid black', marginLeft: '25%', marginRight: '25%', backgroundColor: 'white'}}
    onClick={handleClick}>
        <span><img src={props.logo} style={{height:'75px', width:'75px'}}></img></span>
        <h1>Coin Name: {props.name}</h1>
        <h1>Market Cap: ${props.marketCap}</h1>
        <h1>Current Price: ${props.price}</h1>
    </div>
  )
}

export default SelectCoin;