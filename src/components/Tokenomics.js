import React from 'react'
import dex from '../utils/dexview.png'
import karan from '../utils/karan.png'
import expelee from '../utils/expelee_logo_light.41a503c4.png'
import pinksales from '../utils/pinksale-logo.png'
import elit from '../utils/cryptoelite.png'
const Tokenomics = () => {
  return (
    <div className='tokenomics-container' id='tokenomics'>
      <div className='divider'></div>
      <h2 style={{fontSize:'2rem'}}>Our Partners</h2>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'1rem'}}>
        <img src={dex} alt='dexview logo'/>
        <img src={pinksales} alt='pinksale logo'/>
        <img src={expelee} alt='expelee.com logo'/>
        <img src={elit} alt='crypto elite  logo' style={{height:'200px'}}/>
        <img src={karan} alt='karan tehe wizard'/>
      </div>
      <div className='divider'></div>
    </div>
  )
}

export default Tokenomics