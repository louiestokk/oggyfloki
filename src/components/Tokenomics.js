import React from 'react'
import dex from '../utils/dexview.png'
import solid from '../utils/logo_white.png'
import expelee from '../utils/expelee_logo_light.41a503c4.png'
import pinksales from '../utils/pinksale-logo.png'
const Tokenomics = () => {
  return (
    <div className='tokenomics-container'>
      <div className='divider'></div>
      <h2 style={{fontSize:'2rem'}}>Our Partners</h2>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'1rem'}}>
        <img src={dex} alt='dexview logo'/>
        <img src={solid} alt='solid proof logo'/>
        <img src={pinksales} alt='pinksale logo'/>
        <img src={expelee} alt='expelee.com logo'/>
      </div>
    </div>
  )
}

export default Tokenomics