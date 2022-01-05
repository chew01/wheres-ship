import React, { useState } from 'react';
import Prep from '../components/Prep';
import Wrapper from '../components/Wrapper';
import SubmitScore from '../components/SubmitScore';
import {
  startTime,
  endTime,
  getTimeInSeconds,
  setName,
} from '../firebase.query';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [gameState, setGameState] = useState('prep');
  const [shipsToFind, setShipsToFind] = useState([]);
  const [uid, setUID] = useState('');
  const [timeTaken, setTimeTaken] = useState(0);
  const navigate = useNavigate();

  const prepCompleteHandler = async () => {
    const uid = await startTime();
    setUID(uid);
    setGameState('game');
  };

  const gameCompleteHandler = async () => {
    await endTime(uid);
    const timeInSeconds = await getTimeInSeconds(uid);
    setTimeTaken(timeInSeconds);
    setGameState('score');
  };

  const submitHighScore = async (name) => {
    await setName(uid, name);
    navigate('score');
  };

  return (
    <div>
      {gameState === 'prep' ? (
        <Prep
          setShipsToFind={setShipsToFind}
          shipsToFind={shipsToFind}
          prepCompleteHandler={prepCompleteHandler}
        />
      ) : null}
      {gameState === 'game' ? (
        <Wrapper
          gameCompleteHandler={gameCompleteHandler}
          shipsToFind={shipsToFind}
          setShipsToFind={setShipsToFind}
        />
      ) : null}
      {gameState === 'score' ? (
        <SubmitScore timeTaken={timeTaken} submitHighScore={submitHighScore} />
      ) : null}
    </div>
  );
};

export default Game;
