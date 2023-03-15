import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs';

import { MAGICIAN_ACTIONS, COUNTER_ACTIONS } from '../actions/index';

export const counterIncrementEpic = (action$) =>
  action$.pipe(
    ofType(COUNTER_ACTIONS.INCREMENT),
    mapTo({ type: MAGICIAN_ACTIONS.GUESS, payload: COUNTER_ACTIONS.INCREMENT })
  );

export default combineEpics(counterIncrementEpic);
