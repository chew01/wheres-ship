import React, { useState } from 'react';
import {
  Cluster,
  SelectionBox,
  SelectionPopUp,
  PopUpTitle,
  PopUpList,
  PopUpRow,
  PopUpConfirm,
  ConfirmButton,
} from './Game.styled';

const PopUp = (props) => {
  const selectedQuadrant = props.quadrant;
  let quadrant;
  switch (selectedQuadrant) {
    case 'top-left':
      quadrant = [50, 50, null, null];
      break;
    case 'top-right':
      quadrant = [50, null, null, 0];
      break;
    case 'bottom-left':
      quadrant = [null, 50, 0, null];
      break;
    default:
      quadrant = [null, null, 0, 0];
      break;
  }

  const [selectedShip, setSelectedShip] = useState('');
  const handleSelect = (e) => {
    setSelectedShip(e.target.id);
  };

  const handleSubmit = () => {
    if (!selectedShip) {
      throw new Error('No ship was selected!');
    }
    props.selectShip(selectedShip);
  };

  const { shipsToFind } = props;
  const rows = shipsToFind.map((ship) => {
    return (
      <PopUpRow
        key={ship}
        id={ship}
        onClick={handleSelect}
        selected={selectedShip === ship}
      >
        {ship}
      </PopUpRow>
    );
  });

  return (
    <SelectionPopUp
      top={quadrant[0]}
      left={quadrant[1]}
      bottom={quadrant[2]}
      right={quadrant[3]}
    >
      <PopUpTitle>Who is this?</PopUpTitle>
      <PopUpList>{rows}</PopUpList>
      <PopUpConfirm>
        <ConfirmButton onClick={handleSubmit}>Confirm</ConfirmButton>
      </PopUpConfirm>
    </SelectionPopUp>
  );
};

const SelectorCluster = (props) => {
  return (
    <Cluster left={props.coords[0]} top={props.coords[1]}>
      <SelectionBox />
      <PopUp
        coords={props.coords}
        quadrant={props.quadrant}
        selectShip={props.selectShip}
        shipsToFind={props.shipsToFind}
      />
    </Cluster>
  );
};

export default SelectorCluster;
