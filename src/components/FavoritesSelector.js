import React, { useState, useEffect } from 'react';
import Coin from './Coin';
import SelectCoin from './SelectCoin';

const FavoritesSelector = (props) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // console.log('in the use effect!');
    const finalList = [];
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`)
    .then(response => response.json())
    .then((response) => {
      let key = 0;
      for (const element of response) {
        finalList.push(<SelectCoin kei={key} logo={element.image} name={element.id} marketCap={element.market_cap} price={element.current_price} />);
        key++;
      }
      setCoins(finalList);
    })
    
    .catch(err => console.log(err));
  }, [])
  
  return (
    <div>
      
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Pick Your Favorite Cryptocurrencies</h1>
      
      {coins}
      

    </div>
  );
};

export default FavoritesSelector;