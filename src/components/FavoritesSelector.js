import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import selectCoin from './selectCoin';

function FavoritesSelector() {
  const [displayCoins, setDisplayCoins] = useState([]);
  useEffect(() => {
    const finalList = [];
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then((response) => {
      let key = 0;
      for (const element of response) {
        finalList.push(<selectCoin key={key} logo={element.image} name={element.id} marketCap={element.market_cap} price={element.current_price} />);
        key++;
      }
      setDisplayCoins(finalList);
    })
    .catch(err => console.log(err));
  }, [])
  
  const username = useSelector(state => state.setUser.username);
  return (
    <div>
      <div clasName="nav" style={{height: '75px', width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        WELCOME {username}!
        <button>LOGOUT</button>
      </div>
      {displayCoins}

    </div>
  )
}

export default FavoritesSelector