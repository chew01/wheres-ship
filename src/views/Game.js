import React, { useState } from 'react';
import Prep from '../components/Prep';
import Wrapper from '../components/Wrapper';
import SubmitScore from '../components/SubmitScore';

const Game = () => {
  const [gameState, setGameState] = useState('game');

  return (
    <div>
      {gameState === 'prep' ? <Prep /> : null}
      {gameState === 'game' ? <Wrapper setGameState={setGameState} /> : null}
      {gameState === 'score' ? <SubmitScore /> : null}
    </div>
  );
};

export default Game;
