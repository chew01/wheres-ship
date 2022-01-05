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

const Sheet = styled.div`
  color: white;
  border: 2px solid white;
  min-width: 65vh;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s;
  background-color: darkslategray;
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

const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
`;

const Table = styled.table`
  width: 100%;
  font-size: 3vh;
  padding: 5%;
`;

const Timing = styled.td`
  text-align: right;
`;

export { Background, Sheet, Loading, Title, Table, Timing };
