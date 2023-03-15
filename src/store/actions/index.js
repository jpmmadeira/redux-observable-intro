export const COUNTER_ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

export const incrementCounter = () => ({
  type: COUNTER_ACTIONS.INCREMENT
});

export const decrementCounter = () => ({
  type: COUNTER_ACTIONS.DECREMENT
});

export const MAGICIAN_ACTIONS = {
  GUESS: 'guess'
};
