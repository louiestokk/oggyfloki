import React,{useState} from 'react'
import heroimg from '../utils/hero1.webp'
import logo from '../utils/ourlogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import {navlinks} from '../links/navlinks'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Link } from 'react-router-dom';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
const Hero = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='hero-container'>
      <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
<CancelPresentationIcon onClick={()=> setShowNav(!showNav)}  className='close-btn'/>
        {navlinks?.map((el,i)=>{
          return <a key={i} href={`#${el.path}`}  className='nav-link-item' onClick={()=> setShowNav(!showNav)}>{el.title}</a>
        })}
       <Link to={'/oggyfloki-white-paper'}className='nav-link-item'>WHITE PAPER</Link>
       <a href='https://github.com/expelee-co/Smart-Contract-Audit/blob/main/Oggy%20Floki%20expelee%20audit.pdf' target='_blank' className='nav-link-item'>AUDIT 🎖</a>
       <a href='https://pinksale.notion.site/OGGYFLOKI-KYC-Verification-d9562b054cce4ea8909efb2783532056' target='_blank'  className='nav-link-item'>KYC 🎖</a>
       <a href='https://bscscan.com/address/0x03002eb4de8Ff52018da7f65020da66094166bb6#code' target='_blank' className='nav-link-item'>Contract</a>
       <a href='https://form.jotform.com/233456512659361' target='_blank' className='nav-link-item'>Career 💻</a>
        <img src={logo} alt='logo' className='logo'
        style={{marginTop:'3rem'}}/>
      </div>


      <div className='nav-header'>
        <div style={{display:'flex',alignItems:'center'}}>
        <img className='logo' alt='oggyfloki logo' src={logo}/>
        <h2 style={{marginLeft:'0.5rem',opacity:'1', zIndex:'1000'}} >OGGYFLOKI</h2>
        </div>
      
 <div className='inhouse-logo' onClick={() => setShowNav(!showNav)}>
<MenuIcon />
 </div>
      
      </div>
      <img src={heroimg} alt='oggyfloki adventure' className='hero-mainImg'/>
<div className='hero-content'>
  <Link to={'https://www.pinksale.finance/launchpad/0x67d7372f9bA88989D7a53ba88EF8F44d5CFfc3f4?chain=BSC'}>
  <button className='joinbtn'>PINKSALE PRESALE</button>
  </Link>
  <Link to={'/app-oggyfloki'}>
<button className='playbtn'>PLAY OGGYFLOKI</button>
</Link>
  <div style={{display:'flex',alignItems:'center'}}>
<TelegramIcon className='icons' style={{fontSize:'2.5rem',marginRight:'0.5rem',cursor:'pointer'}} onClick={()=> window.location.href='https://t.me/oggyfloki'}/>
  <TwitterIcon className='icons' style={{fontSize:'2.5rem',marginLeft:'0.5rem',cursor:'pointer'}} onClick={()=> window.location.href='https://twitter.com/OggyFloki'}/>
  </div>

</div>



    </div>
  )
}

export default Hero