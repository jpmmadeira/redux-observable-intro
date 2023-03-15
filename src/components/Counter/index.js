import React from 'react';
import { connect } from 'react-redux';

import { decrementCounter, incrementCounter } from '../../store/actions';

import { Wrapper, Buttons, Card } from './styles';

const Counter = ({ decrement, increment, count }) => {
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

const mapStateToProps = ({ count }) => {
  return { count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
