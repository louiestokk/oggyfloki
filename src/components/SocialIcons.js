import React from 'react'
import twitter from '../utils/twitter.png'
import telegram from '../utils/telegram.png'
import github from '../utils/github.png'
const SocialIcons = () => {
  return (
    <div className='social-icons-container'>
        <img src={telegram} alt='telegramm logo' onClick={()=> window.location.href='https://t.me/oggyfloki'}/>
        <img src={twitter} alt='twitter logo' onClick={()=> window.location.href='https://twitter.com/OggyFloki'}/>
    </div>
  )
}

export default SocialIcons