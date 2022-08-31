import React, { useState, useEffect } from 'react';
import Coin from './Coin'

const CoinDisplay = (props) => {
  const [topCoins, setTopCoins] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    //,MATIC,ethereum,chainlink,dogecoin,cardano,shiba-inu
    const finalList = [];
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins}`)
    .then(response => response.json())
    // .then(response => console.log(response))
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
  <div style={{}}>
    <h1 style={{display: 'flex', justifyContent: 'center'}}>My Favorite Cryptocurrencies!</h1>
    {topCoins}
  </div>
  );
};

export default CoinDisplay;
