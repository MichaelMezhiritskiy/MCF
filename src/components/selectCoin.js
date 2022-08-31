import React, { useState } from 'react'

function selectCoin() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        if (!clicked) {
            //use redux to add props.name to the global state
            document.getElementById('box').style.backgroundColor = 'lightgreen';
            setClicked(true);
        } else {
            document.getElementById('box').style.backgroundColor = 'white'
            //use redux store to remove 
        }
    }

  return (
    <div>
        <div clasName="coinbox"  id="box" style={{display: 'flex', justifyContent:'space-evenly', border:'2px solid black', marginLeft: '25%', marginRight: '25%'}}
        onClick={handleClick}>
        <span><img src={props.logo} style={{height:'75px', width:'75px'}}></img></span>
        <h1>Coin Name: {props.name}</h1>
        <h1>Market Cap: ${props.marketCap}</h1>
        <h1>Current Price: ${props.price}</h1>
    </div>


    </div>
  )
}

export default selectCoin