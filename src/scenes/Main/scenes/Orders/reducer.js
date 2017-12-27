import { combineReducers } from 'redux';
import { reducer as dataReducer } from './data/reducer';
import { reducer as pointManagerReducer } from './scenes/PointManager/reducer';

export const reducer = combineReducers({
  data: dataReducer,
  pointManager: pointManagerReducer,
});
