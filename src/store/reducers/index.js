import { MAGICIAN_ACTIONS, COUNTER_ACTIONS } from '../actions/index';

export const counterReducer = (state = {}, { type }) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case COUNTER_ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case MAGICIAN_ACTIONS.GUESS:
      const evenOrOdd = state.count % 2 === 0 ? 'even' : 'odd';
      window.alert(`The next value will be an ${evenOrOdd} number`);

      return state;
    default:
      return state;
  }
};
