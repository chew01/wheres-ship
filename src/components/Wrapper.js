import React, { useEffect, useState } from 'react';
import Ships from './../assets/ships.png';
import { Frame, GameImage } from './Game.styled';
import SelectorCluster from './Selector';

const Wrapper = () => {
  const [selectionExist, setSelectionExist] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState([0, 0]);
  const [selectedQuadrant, setSelectedQuadrant] = useState('bottom-right');
  const [queryShip, setQueryShip] = useState('');
  const [queryCoords, setQueryCoords] = useState([0, 0]);

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

  useEffect(() => {
    const queryObject = { queryShip, queryCoords };
    console.log(queryObject);
  }, [queryCoords, queryShip]);

  return (
    <Frame>
      <GameImage src={Ships} onClick={handleClick} alt="Game" />
      {selectionExist ? (
        <SelectorCluster
          coords={selectedCoords}
          quadrant={selectedQuadrant}
          selectShip={selectShip}
        />
      ) : null}
    </Frame>
  );
};

export default Wrapper;
