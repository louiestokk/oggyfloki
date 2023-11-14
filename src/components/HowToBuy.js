import React from 'react'
import animation from '../utils/animtok.gif'
import bnb from '../utils/bsc-img.png'
const HowToBuy = () => {
  return (
    <div className="howto-container" id='tokeninfo'>
      <h2 style={{fontSize:'1.8rem',letterSpacing:'1px'}}>Token Info</h2>
<img src={bnb} alt='binance smart chain' style={{width:'240px'}}/>
<h3>Token Name</h3>
<h2>OGGY FLOKI</h2>
<h3 style={{marginTop:'2rem'}}>Token Symbol</h3>
<h2>$OGF</h2>
<h3 style={{marginTop:'2rem'}}>Total Supply</h3>
<h2 style={{fontSize:'1.2rem',letterSpacing:'1px'}}>469,690,000,000,000</h2>
<img src={animation} alt='animation of crypto' style={{marginTop:'2rem'}}/>
<div className='divider'></div>
    </div>

   
  )
}

export default HowToBuy