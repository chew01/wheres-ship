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

const Form = styled.div`
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

const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
`;

const Time = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vh;
`;

const Comment = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
`;

const Prompt = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
`;

const InputName = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
  flex: 1;
  gap: 2vh;
  flex-direction: column;
`;

const Name = styled.input`
  height: 3vh;
  font-size: 2vh;
  text-align: center;
  width: 15vw;
`;

const Submit = styled.button`
  background-color: white;
  width: 15vw;
  height: 4vh;
  font-size: 2vh;
  cursor: pointer;

  &:hover {
    background-color: lightpink;
  }
`;

export {
  Background,
  Form,
  Title,
  Time,
  Comment,
  Prompt,
  InputName,
  Name,
  Submit,
};
