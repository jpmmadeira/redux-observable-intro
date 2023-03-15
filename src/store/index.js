import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import epics from './epics';
import { counterReducer } from './reducers';

export const makeStore = ({ initialState }) => {
  const epicMiddleware = createEpicMiddleware();

  const store = configureStore({
    reducer: counterReducer,
    preloadedState: initialState,
    middleware: [epicMiddleware]
  });

  epicMiddleware.run(epics);

  return store;
};
