import { COUNTER_ACTIONS } from '../actions/index';

export const counterReducer = (state = {}, { type }) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case COUNTER_ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
