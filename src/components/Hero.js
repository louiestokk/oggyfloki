import React,{useState} from 'react'
import heroimg from '../utils/hero1.webp'
import logo from '../utils/ourlogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { navlinks } from '../links/navlinks';
const Hero = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='hero-container'>
      <div className='nav-header'>
        <img className='logo' alt='oggyfloki logo' src={logo}/>
       <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
        {navlinks?.map((link,i)=>{
          return <a href={link.path} key={i}>{link.title}</a>
        })}
       </div>
 <div className='inhouse-logo' onClick={() => setShowNav(!showNav)}>
<MenuIcon />
 </div>
      
      </div>
      <img src={heroimg} alt='oggyfloki adventure' className='hero-mainImg'/>
<div className='hero-content'>
  <button className='joinbtn'>PINKSALE PRESALE</button>
  <button className='playbtn'>PLAY OGGYFLOKI</button>
  <div style={{display:'flex',alignItems:'center'}}>
<TelegramIcon className='icons' style={{fontSize:'2.5rem',marginRight:'0.5rem'}}/>
  <TwitterIcon className='icons' style={{fontSize:'2.5rem',marginLeft:'0.5rem'}}/>
  </div>

</div>



    </div>
  )
}

export default Hero