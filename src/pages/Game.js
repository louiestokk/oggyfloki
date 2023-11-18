import React, { useState, useEffect } from 'react';

const Game = () => {
  // Definiera spelets tillstånd som t.ex. ormens position, myntposition, poäng, etc.
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]); // Ormens startposition
  const [coin, setCoin] = useState({ x: 5, y: 5 }); // Myntets position
  const [direction, setDirection] = useState({ x: 0, y: -1 }); // Starta rörelseriktning
  const [score, setScore] = useState(0); // Spelarens poäng

  // Hantera tangenttryckningar och uppdatera riktning baserat på det
  const handleKeyPress = e => {
    switch (e.key) {
      case 'ArrowUp':
        setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  // Använd useEffect för att registrera och avregistrera händelsehanterare för tangenttryckningar
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // En funktion för att starta om spelet
  const resetGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setCoin({ x: 5, y: 5 });
    setScore(0);
    setDirection({ x: 0, y: -1 });
  };

  // En huvudloop som körs varje gång snake eller direction uppdateras
  useEffect(() => {
    const moveSnake = () => {
      // Skapa en ny position för ormens huvud baserat på riktningen
      const newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      };

      // Kolla om ormen har ätit ett mynt
      if (newHead.x === coin.x && newHead.y === coin.y) {
        // Uppdatera poäng och placera ett nytt mynt
        setScore(score + 1);
        placeNewCoin();
        // Lägg till det nya huvudet utan att ta bort svansen
        setSnake(prev => [newHead, ...prev]);
      } else {
        // Flytta ormen genom att lägga till det nya huvudet och ta bort svansen
        setSnake(prev => [newHead, ...prev.slice(0, -1)]);
      }

      // Kolla kollisioner med väggarna eller med ormens kropp
      if (newHead.x < 0 || newHead.x >= 10 || newHead.y < 0 || newHead.y >= 10 || checkCollision(newHead)) {
        resetGame();
      }
    };

    // Sätt upp en timer som rör ormen
    const timer = setTimeout(moveSnake, 200);
    return () => clearTimeout(timer);
  }, [snake, direction]);

  // Kolla om ormen kolliderar med sig själv
  const checkCollision = newHead => {
    return snake.some(segment => segment.x === newHead.x && segment.y === newHead.y);
  };

  // Placera ett nytt mynt på brädet
  const placeNewCoin = () => {
    const newCoinPosition = {
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10),
    };
    setCoin(newCoinPosition);
  };

  // Rendera spelet
  return (
    <div>
      <h2 style={{maxWidth:'300px'}}>Play the classic game of Snake while we develop the OGGYFLOKI GAME</h2>
      <h1>Score: {score}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 20px)' }}>
        {Array.from({ length: 10 }, (_, rowIndex) =>
          Array.from({ length: 10 }, (_, columnIndex) => {
            const isSnake = snake.some(segment => segment.x === columnIndex && segment.y === rowIndex);
            const isCoin = coin.x === columnIndex && coin.y === rowIndex;
            return (
              <div
                key={`${rowIndex}-${columnIndex}`}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: isSnake ? 'green' : isCoin ? 'gold' : 'white',
                  border: '1px solid black',
                }}
              />
            );
          }),
        )}
      </div>
    </div>
  );
};

export default Game;
