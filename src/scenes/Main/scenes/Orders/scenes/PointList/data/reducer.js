import { combineReducers } from 'redux';
import { reducer as getPointListReducer } from './getPointList/reducer';

export const reducer = combineReducers({
  getPointList: getPointListReducer,
});
