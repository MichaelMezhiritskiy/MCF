import React, { useState, useEffect } from 'react';
import Coin from './Coin'

const CoinDisplay = (props) => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const finalList = [];
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`)
    .then(response => response.json())
    .then((response) => {
      let key = 0;
      for (const element of response) {
        finalList.push(<Coin key={key} logo={element.image} name={element.id} marketCap={element.market_cap} price={element.current_price} />);
        key++;
      }
      setTopCoins(finalList);
    })
    .catch(err => console.log(err));
  }, [])

  return (
  <div>
    <h1 style={{display: 'flex', justifyContent: 'center'}}>Mikes Cryptocurrency Forum!!!</h1>
    {topCoins}
  </div>
  );
};

export default CoinDisplay;
