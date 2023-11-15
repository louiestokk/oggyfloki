import React from 'react';
import logo from '../utils/ourlogo.png'

const FooterNav = () => {
  return (
    <>
     <footer className="footer">
      <div className="footer-column">
        <img src={logo} alt="Logo" className="footer-logo" style={{width:'45px',height:'45px'}}/>
        <p style={{fontSize:'1.2rem',lineHeight:'26px'}}>OGGY FLOKI is a meme token engineered with an innovative economic design to enhance its community's investment experience.</p>
      </div>
      <div className="footer-column">
        <h3>Community</h3>
        <ul>
          <li><a href="https://t.me/oggyfloki">Telegram</a></li>
          <li><a href="https://twitter.com/OggyFloki">Twitter</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#!">Exchange</a></li>
        </ul>
      </div>
    </footer>
      <div className='bottom-fot'>
        <p>Copyright ©️ 2023 Oggy Floki</p>
        <p>All Rights Reserved</p>
      </div>
    </>
   
  );
};

export default FooterNav;
