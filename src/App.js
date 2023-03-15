import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';

import './index.css';
import { makeStore } from './store';

const INITIAL_STATE = { initialState: { count: 0 } };

const App = () => (
  <Provider store={makeStore(INITIAL_STATE)}>
    <Counter />
  </Provider>
);

export default App;
