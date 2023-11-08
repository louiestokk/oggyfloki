import React from 'react'
import heroimg from '../utils/hero1.webp'
import logo from '../utils/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='nav-header'>
        <img className='logo' alt='oggyfloki logo' src={logo}/>
 <div className='inhouse-logo'>
<MenuIcon />
 </div>
      
      </div>
      <img src={heroimg} alt='oggyfloki adventure' className='hero-mainImg'/>

    </div>
  )
}

export default Hero