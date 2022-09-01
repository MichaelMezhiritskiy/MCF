import React from 'react';

const Coin = props => {
  
  return (
    <div clasName="coinbox" style={{display: 'flex', justifyContent:'space-evenly', border:'2px solid black', marginLeft: '25%', marginRight: '25%'}}>
        <span><img src={props.logo} style={{height:'75px', width:'75px'}}></img></span>
        <h1>Coin Name: {props.name}</h1>
        <h1>Market Cap: ${props.marketCap}</h1>
        <h1>Current Price: ${props.price}</h1>
    </div>
  )
}

export default Coin;

// const [clicked, setClicked] = useState(false);
  // const handleClick = () => {
  //   if (clicked) {
  //     document.getElementById('box').styles.backgroundColor = 'lightgreen'
  //     return setClicked(true);
  //   } else {
  //     document.getElementById('box').styles.backgroundColor = 'white';
  //     return setClicked(false);
  //   }
  // };
