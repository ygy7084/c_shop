import { combineReducers } from 'redux';
import { reducer as dataReducer } from './data/reducer';
import { reducer as pointListReducer } from './scenes/PointList/reducer';
import { reducer as pointManagerReducer } from './scenes/PointManager/reducer';

export const reducer = combineReducers({
  data: dataReducer,
  pointList: pointListReducer,
  pointManager: pointManagerReducer,
});
