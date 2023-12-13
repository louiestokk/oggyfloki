import React from 'react';
import logo from '../utils/ourlogo.png'
import { Link } from 'react-router-dom';
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
          <li><a href="https://github.com/expelee-co/Smart-Contract-Audit/blob/main/Oggy%20Floki%20expelee%20audit.pdf" target='_blank'>Audit 🎖</a></li>
          <li>
          <a href='https://pinksale.notion.site/OGGYFLOKI-KYC-Verification-d9562b054cce4ea8909efb2783532056' target='_blank'>KYC 🎖</a>
          </li>
          <li><a href="https://bscscan.com/address/0x03002eb4de8Ff52018da7f65020da66094166bb6#code" target='_blank'>Contract</a></li>
          <li><a href="https://pancakeswap.finance" target='_blank'>Exchange</a></li>
          <li><a href="https://github.com/louiestokk/oggyfloki/blob/main/src/utils/whitepaper.pdf" target='_blank'>Whitepaper</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><Link to='/career-portal'  className='nav-link-item' style={{fontSize:'1rem'}}>Career 💻</Link></li>
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
