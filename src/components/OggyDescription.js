import React from 'react'
import oggy from '../utils/oggyflokihappy.gif'
const OggyDescription = () => {
  return (
    <div className='oggy-description'>
        <h2>Welcome To OGGYFLOKI</h2>  
        <p>The Peoples Meme Token  $OGGYFLOKI is 100% community-driven</p>
        <p>OGGY FLOKI is a meme token engineered with an innovative economic design to enhance its community's investment experience</p>
        <img src={oggy} alt='oggy dancing' style={{height:'85px',width:'85px',marginTop:'1rem'}}/>
    </div>
  )
}

export default OggyDescription