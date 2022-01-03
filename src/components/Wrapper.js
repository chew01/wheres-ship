import React, { useEffect, useState } from 'react';
import Ships from './../assets/ships.png';
import { Frame, GameImage } from './Game.styled';
import SelectorCluster from './Selector';
import queryForShipCoordinates from '../firebase.query';

const Wrapper = () => {
  const [shipsToFind, setShipsToFind] = useState([
    'Hiryuu',
    'Souryuu',
    'Nagato',
    'Mutsu',
    'Musashi',
    'Yamato',
  ]);

  const [selectionExist, setSelectionExist] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState([0, 0]);
  const [selectedQuadrant, setSelectedQuadrant] = useState('bottom-right');

  const [queryShip, setQueryShip] = useState('');
  const [queryCoords, setQueryCoords] = useState([0, 0]);

  //after click, selectedcoords is changed, and then selector cluster is rendered
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

  //after select button is clicked, queryship is changed, and then selector cluster is unrendered
  const selectShip = (ship) => {
    setQueryShip(ship);
    setSelectionExist(false);
  };

  //render occurs when page loads, or selector cluster is opened/closed (element change)
  //we need something that occurs after element change, specifically something that occurs after selector is closed

  useEffect(() => {
    if (queryShip === '') return;

    const validateShip = async (obj) => {
      const validation = await queryForShipCoordinates(obj);
      if (validation) {
        setShipsToFind(shipsToFind.filter((item) => item !== validation));
      } else throw new Error('Wrong guess!');
    };

    const queryObject = { queryShip, queryCoords };
    validateShip(queryObject);
    setQueryShip('');
  }, [queryShip, queryCoords, shipsToFind]);

  return (
    <Frame>
      <GameImage src={Ships} onClick={handleClick} alt="Game" />
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

export default Wrapper;
