import React, { useState } from 'react';
import {
  Background,
  Start,
  Title,
  Instructions,
  ButtonContainer,
  Begin,
  Loading,
  Showhand,
  CardContainer,
  Card,
} from './Prep.styled';
import loader from './ImageLoader';
import { queryForRandomShips } from '../firebase.query';

const Prep = (props) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [charactersLoaded, setCharactersLoaded] = useState(false);

  const { shipsToFind, setShipsToFind, prepCompleteHandler } = props;

  const startButtonHandler = async () => {
    setHasStarted(true);
    setIsLoading(true);
    const ships = await queryForRandomShips(5);
    setShipsToFind(ships);
    setIsLoading(false);
    setHasStarted(true);
    setCharactersLoaded(true);
  };

  return (
    <Background>
      {hasStarted ? null : (
        <StartScreen startButtonHandler={startButtonHandler} />
      )}
      {isLoading ? <Loading>Loading...</Loading> : null}
      {charactersLoaded ? (
        <ReadyScreen
          shipsToFind={shipsToFind}
          prepCompleteHandler={prepCompleteHandler}
          setIsLoading={setIsLoading}
          setCharactersLoaded={setCharactersLoaded}
        />
      ) : null}
    </Background>
  );
};

const StartScreen = (props) => {
  const { startButtonHandler } = props;

  return (
    <Start>
      <Title>Find the Shipfu!</Title>
      <Instructions>
        This is a game where you have to find five randomly generated ships on a
        picture as fast as possible.
        <ol>
          <li>Click the start button.</li>
          <li>Five ships will be randomly selected and displayed to you.</li>
          <li>Once you click 'Anchor Weigh', the game begins!</li>
          <li>Click on any face, then select the ship you think she is.</li>
          <li>
            After finding all 5 ships, you can enter your name into the score
            board.
          </li>
        </ol>
      </Instructions>
      <ButtonContainer>
        <Begin onClick={startButtonHandler}>Start Game</Begin>
      </ButtonContainer>
    </Start>
  );
};

const ReadyScreen = (props) => {
  const {
    shipsToFind,
    prepCompleteHandler,
    setIsLoading,
    setCharactersLoaded,
  } = props;
  let shipImages;
  const images = loader();

  const handleGameBegin = () => {
    setCharactersLoaded(false);
    setIsLoading(true);
    prepCompleteHandler();
  };

  const loadImages = () => {
    const shipImageArray = [];
    shipsToFind.forEach((name) => {
      const image = images[name];
      shipImageArray.push([image, name]);
    });

    shipImages = shipImageArray.map((pair) => {
      return (
        <CardContainer key={pair[0] + pair[1]}>
          <Card src={pair[0]} alt={pair[1]} />
          {pair[1]}
        </CardContainer>
      );
    });
  };

  loadImages();

  return (
    <Showhand>
      {shipImages}
      <Begin onClick={handleGameBegin}>Anchor Weigh!</Begin>
    </Showhand>
  );
};

export default Prep;
