import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
  opacity: 0%
}
100% {
  opacity: 95%
}
`;

const errorFadeInAndOut = keyframes`
0% {
  opacity: 0%
}
10% {
  opacity: 95%
}
90% {
  opacity: 95%
}
100% {
  opacity: 0%
}
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const GameImage = styled.img`
  max-height: 100vh;
`;

const Cluster = styled.div`
  top: ${(props) => props.top - 25}px;
  left: ${(props) => props.left - 25}px;
  position: absolute;
`;

const SelectionBox = styled.div`
  position: absolute;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  box-sizing: border-box;
`;

const SelectionPopUp = styled.div`
  position: absolute;
  animation: ${fadeIn} 0.5s;
  display: flex;
  flex-direction: column;
  min-width: 40vh;
  max-height: 30vh;
  border: 3px solid black;
  background-color: white;
  opacity: 95%;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  bottom: ${(props) => props.bottom}px;
  right: ${(props) => props.right}px;
`;

const PopUpTitle = styled.div`
  background-color: lightgray;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

const PopUpList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: black;
`;

const PopUpRow = styled.li`
  padding: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'lightslategray' : 'white')};

  &:hover {
    background-color: lightslategrey;
  }
`;

const PopUpConfirm = styled.div`
  padding: 10px;
  background-color: lightgrey;
  border-top: 1px solid black;
  text-align: right;
`;

const ConfirmButton = styled.button`
  -webkit-appearance: none;
  background-color: white;
  border: 2px solid black;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

const Circle = styled.div`
  position: absolute;
  border: 5px solid lime;
  border-radius: 50%;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  background-color: #f99696;
  top: 2vh;
  width: 90vh;
  height: 5vh;
  padding: 1.5vh;
  box-sizing: border-box;
  color: white;
  font-size: 2vh;
  border-radius: 1vh;
  animation: ${errorFadeInAndOut} 8s;
`;

export {
  Frame,
  GameImage,
  Cluster,
  SelectionBox,
  SelectionPopUp,
  PopUpTitle,
  PopUpList,
  PopUpRow,
  PopUpConfirm,
  ConfirmButton,
  Circle,
  ErrorMessage,
};
