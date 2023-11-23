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
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="https://github.com/expelee-co/Smart-Contract-Audit/blob/main/Oggy%20Floki%20expelee%20audit.pdf" target='_blank'>Audit</a></li>
          <li><Link to="/oggyfloki-white-paper">White Paper</Link></li>
          <li><a href="https://bscscan.com/address/0x9acbbad33b8d66cbffd46c573e175ae923b17992" target='_blank'>Contract</a></li>
          <li><a href="https://pancakeswap.finance" target='_blank'>Exchange</a></li>
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
