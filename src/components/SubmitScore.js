import React, { useState } from 'react';
import {
  Background,
  Form,
  Title,
  Time,
  Comment,
  Prompt,
  InputName,
  Name,
  Submit,
} from './Score.styled';

const SubmitScore = (props) => {
  const { timeTaken, submitHighScore } = props;
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitScore = () => {
    submitHighScore(input);
  };

  return (
    <Background>
      <Form>
        <Title>Your time was...</Title>
        <Time>{timeTaken} seconds</Time>
        <Comment>That's pretty fast!</Comment>
        <InputName>
          <Prompt>Enter a nickname!</Prompt>
          <Name type="text" value={input} onChange={handleInput} />
          <Submit onClick={submitScore}>Submit</Submit>
        </InputName>
      </Form>
    </Background>
  );
};

export default SubmitScore;
