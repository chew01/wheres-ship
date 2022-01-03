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

const SubmitScore = () => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Background>
      <Form>
        <Title>Your time was...</Title>
        <Time>10:05:20</Time>
        <Comment>That's pretty fast!</Comment>
        <InputName>
          <Prompt>Enter a nickname!</Prompt>
          <Name type="text" value={input} onChange={handleInput} />
          <Submit>Submit</Submit>
        </InputName>
      </Form>
    </Background>
  );
};

export default SubmitScore;
