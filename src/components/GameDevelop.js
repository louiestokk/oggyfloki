import React, { useEffect, useRef } from 'react';
import animation from '../utils/game.gif'
const GameDevelop = () => {
    const textRef = useRef(null);
    useEffect(() => {
        const textElement = textRef.current;
    
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const textPosition = textElement.offsetTop;
    
          if (scrollPosition > textPosition) {
            textElement.classList.add('animate-text');
            window.removeEventListener('scroll', handleScroll);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div className="game-presentation-container">
      <div className="game-info" ref={textRef}>
        <h2>Welcome to the Oggy Floki Adventure!</h2>
        <p>
          Embark on a thrilling journey with Oggy and his friends! Join them in epic adventures,
          explore hidden treasures, and engage in intense battles. Follow along as they navigate
          through fantastic worlds and encounter unexpected challenges.
        </p>
        <button className="explore-button" onClick={()=> window.location.href='/app-oggyfloki'}>Explore Now</button>
      </div>
      <div className="game-gif">
        <img src={animation} alt="Game Presentation GIF" />
      </div>
    </div>
  )
}

export default GameDevelop