import { combineReducers } from 'redux';

import { reducer as savePointReducer } from './savePoint/reducer';
import { reducer as submitPhoneNumberReducer } from './submitPhoneNumber/reducer';

export const reducer = combineReducers({
  savePoint: savePointReducer,
  submitPhoneNumber: submitPhoneNumberReducer,
});
