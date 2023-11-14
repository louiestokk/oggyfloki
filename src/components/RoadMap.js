
import React from 'react';

const RoadMap = () => {
  const boxes = [
    { number: '1', points: ['Inception of the project and development of the token.', 'Establishing social media presence and building a community.', 'Writing and publishing Medium articles and whitepaper.','Conducting a private sale and finalizing tokenomics with it included.'] },
    { number: '2', points: ['Preparing for and launching presale.', 'Establishing partnerships with influencers and other meme tokens.', 'Hiring additional developers and expanding the team.','Developing token staking.','Initiating marketing campaigns and promotional activities.','Listing on decentralized exchanges and involving the community in key decisions.'] },
    { number: '3', points: ['Launching public sale and mobile app.', 'Integrating with charities and developing a charity platform.','Expanding token holder rewards.','Pursuing partnerships with wallets and exchanges.','Listing on centralized exchanges.','Organizing community events and exploring further development of the ecosystem.'] },
  ];

  return (
    <div className="roadmap" id='roadmap'>
      <h2 style={{letterSpacing:'2px',marginBottom:'1rem',fontSize:'1.6rem'}}>ROADMAP</h2>
      {boxes.map((box, index) => (
        <div key={index} className="box">
          <h2>{box.number}</h2>
          <ul>
            {box.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoadMap;
