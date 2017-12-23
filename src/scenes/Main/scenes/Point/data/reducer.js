import { combineReducers } from 'redux';

import { reducer as savePointReducer } from './savePoint/reducer';

export const reducer = combineReducers({
  savePoint: savePointReducer,
});
