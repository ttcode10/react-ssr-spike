import React, { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <Container>
      <Row>
        <Text>{count}</Text>
      </Row>
      <Row>
        <Button onClick={increment}>+ Increment</Button>
        <Button onClick={decrement}>- Decrement</Button>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 40px;
  font-family: 'Roboto';
`;

const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0;
  font-size: 20px;
  font-family: 'Roboto';
  cursor: pointer;

  &~& {
    margin-left: 8px;
  }
`;

export default Home;
