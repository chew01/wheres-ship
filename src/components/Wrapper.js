import React, { useEffect, useState } from 'react';
import Ships from './../assets/ships.png';
import { Frame, GameImage, Circle, ErrorMessage } from './Game.styled';
import SelectorCluster from './Selector';
import { queryForShipCoordinates } from '../firebase.query';

const Wrapper = (props) => {
  const { gameCompleteHandler, shipsToFind, setShipsToFind } = props;
  const [shipsFound, setShipsFound] = useState([]);

  const [selectionExist, setSelectionExist] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState([0, 0]);
  const [selectedQuadrant, setSelectedQuadrant] = useState('bottom-right');

  const [queryShip, setQueryShip] = useState('');
  const [queryCoords, setQueryCoords] = useState([0, 0]);

  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState('');

  const handleClick = (e) => {
    if (selectionExist) {
      setSelectionExist(false);
    } else {
      const restoreRatio = e.target.naturalHeight / e.target.height;
      const restoredX = Math.round(e.nativeEvent.offsetX * restoreRatio);
      const restoredY = Math.round(e.nativeEvent.offsetY * restoreRatio);
      setQueryCoords([restoredX, restoredY]);

      const findQuadrantOfClick = (x, y, width, height) => {
        if (width / 2 > x && height / 2 > y) {
          return 'top-left';
        } else if (width / 2 < x && height / 2 > y) {
          return 'top-right';
        } else if (width / 2 > x && height / 2 < y) {
          return 'bottom-left';
        } else {
          return 'bottom-right';
        }
      };

      const quadrantOfClick = findQuadrantOfClick(
        e.clientX,
        e.clientY,
        e.target.width,
        e.target.height
      );
      setSelectedQuadrant(quadrantOfClick);
      setSelectedCoords([e.clientX, e.clientY]);
      setSelectionExist(true);
    }
  };

  const selectShip = (ship) => {
    setQueryShip(ship);
    setSelectionExist(false);
  };

  const indicateFound = shipsFound.map((coords) => {
    return <Indicator key={coords[0]} coords={coords}></Indicator>;
  });

  const indicateError = (msg) => {
    setErrorType(msg);
    setHasError(true);
    setTimeout(() => {
      setErrorType('');
      setHasError(false);
    }, 4900);
  };

  // validation
  useEffect(() => {
    if (queryShip === '') return;

    const validateShip = async (obj) => {
      const validation = await queryForShipCoordinates(obj);
      if (validation) {
        setShipsToFind(shipsToFind.filter((item) => item !== validation));
        setShipsFound(shipsFound.concat([selectedCoords]));
      } else indicateError('Wrong location!');
    };

    const queryObject = { queryShip, queryCoords };
    validateShip(queryObject);
    setQueryShip('');
  }, [
    queryShip,
    queryCoords,
    shipsToFind,
    setShipsToFind,
    shipsFound,
    selectedCoords,
  ]);

  // game over condition
  useEffect(() => {
    if (shipsToFind.length === 0) {
      gameCompleteHandler();
    }
  }, [shipsToFind, gameCompleteHandler]);

  return (
    <Frame>
      <GameImage src={Ships} onClick={handleClick} alt="Game" />
      {indicateFound}
      {hasError ? <Error type={errorType} /> : null}
      {selectionExist ? (
        <SelectorCluster
          coords={selectedCoords}
          quadrant={selectedQuadrant}
          selectShip={selectShip}
          shipsToFind={shipsToFind}
        />
      ) : null}
    </Frame>
  );
};

const Indicator = (props) => {
  const { coords } = props;
  const x = coords[0] - 24;
  const y = coords[1] - 24;

  return <Circle top={y} left={x} />;
};

const Error = (props) => {
  const { type } = props;

  return <ErrorMessage>{type}</ErrorMessage>;
};

export default Wrapper;
