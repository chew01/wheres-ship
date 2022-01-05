import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
  opacity: 0%
}
100% {
  opacity: 100%
}
`;

const Background = styled.div`
  display: flex;
  background-color: #2c2929;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Start = styled.div`
  color: white;
  border: 2px solid white;
  min-width: 65vh;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
  background-color: darkslategrey;
`;

const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  flex: 1;
`;

const Instructions = styled.div`
  flex: 1;
  padding: 0px 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2vh;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Begin = styled.button`
  background-color: white;
  width: 15vw;
  height: 7.5vh;
  font-size: 3vh;
  cursor: pointer;
  grid-column: 3 / 4;

  &:hover {
    background-color: lightpink;
  }
`;

const Loading = styled.div`
  background-color: #f34343;
  color: white;
  font-size: 5vw;
  padding: 5vh;
  border-radius: 2.5vh;
  border: 1vh dotted white;
  animation: ${fadeIn} 1s;
`;

const Showhand = styled.div`
  color: white;
  border: 2px solid white;
  display: grid;
  grid-template: 40vh 10vh / repeat(5, 15vw);
  background-color: darkslategrey;
  animation: ${fadeIn} 1s;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 4vh;
`;

const Card = styled.img`
  opacity: 90%;
  width: 100%;

  &:hover {
    opacity: 100%;
  }
`;

export {
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
};
