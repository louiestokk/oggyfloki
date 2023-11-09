import React from 'react'
import img from '../utils/mech2.webp'
import logo from '../utils/logo.png'
const About = () => {
  return (
    <div className='about-container'>
     <img src={img} alt='mechanics oggy floki'/>
     <p>The <span style={{color:'#FFC900', fontFamily:'DotGothic16',fontWeight:'bold'}}>$OGF</span> is a meme token engineered with an innovative economic design to enhance its <span style={{color:'#FFC900', fontFamily:'DotGothic16',letterSpacing:'1px',fontWeight:'bold'}} >community's </span>investment experience.</p>
     <p style={{marginTop:'1rem'}}>Every transaction activates a system that fosters a stream of passive income. For each token purchase, a calculated  <span style={{color:'#FFC900', fontFamily:'DotGothic16',letterSpacing:'1px',fontWeight:'bold'}} >5%</span> fee is contributed to the marketing wallet, and <span style={{color:'#FFC900', fontFamily:'DotGothic16',letterSpacing:'1px',fontWeight:'bold'}} >5%</span> fee from sales transactions is redistributed to the  <span style={{color:'#FFC900', fontFamily:'DotGothic16',fontWeight:'bold'}} >token</span> holders.</p>
     <div className='divider'></div>
     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

     <img src={logo} alt='googy floki logo' style={{width:'40px',height:'40px',marginRight:'0.5rem'}}/>
     <h2 style={{marginLeft:'0.5rem'}}>Passive Income</h2>
     </div>
     <section className='about-stats'>
      <div>
        <h2 style={{fontSize:'1.8rem',letterSpacing:'2px'}}>5%</h2>
        <p>Tax to <span>Buy</span> </p>
        <span>Allocated to Marketing</span>
      </div>
      <div>
        <h2 style={{fontSize:'1.8rem',letterSpacing:'2px'}}>8%</h2>
        <p>Tax on <span>Sell</span></p>
        <span>5% Redistribution to every $OGF holder </span>
      </div>
      <div>
        <h2 style={{fontSize:'1.8rem',letterSpacing:'2px'}}>2%</h2>
        <p>From <span>Sell</span> </p>
        <span>Liquidity </span>
      </div>
      <div>
        <h2 style={{fontSize:'1.8rem',letterSpacing:'2px'}}>1%</h2>
        <p>From <span>Sell</span> </p>
        <span>Burn</span>
      </div>
     </section>
     <button>Buy $OGF</button>
    </div>
  )
}

export default About