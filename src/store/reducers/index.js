import { MAGICIAN_ACTIONS, COUNTER_ACTIONS } from '../actions/index';

export const counterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case COUNTER_ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case MAGICIAN_ACTIONS.GUESS:
      const nextNumber = payload === COUNTER_ACTIONS.INCREMENT ? state.count + 1 : state.count - 1;
      const evenOrOdd = nextNumber % 2 === 0 ? 'even' : 'odd';

      window.alert(`The next value will be an ${evenOrOdd} number`);

      return state;
    default:
      return state;
  }
};
