import React, { useState } from 'react';

import { Wrapper, Buttons, Card } from './styles';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <Wrapper>
      <Card>
        <img src="logo.png" alt="logo" />
        <Buttons>
          <button onClick={decrement}>-</button>
          <p>{count}</p>
          <button onClick={increment}>+</button>
        </Buttons>
      </Card>
    </Wrapper>
  );
};

export default Counter;
