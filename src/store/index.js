import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './reducers';

export const makeStore = ({ initialState }) => {
  const store = configureStore({
    reducer: counterReducer,
    preloadedState: initialState
  });

  return store;
};
