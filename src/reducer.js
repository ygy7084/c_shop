import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as dataReducer } from './data/reducer';
import { reducer as entryReducer } from './scenes/Entry/reducer';
import { reducer as mainReducer } from './scenes/Main/reducer';

export default combineReducers({
  routing: routerReducer,
  data: dataReducer,
  entry: entryReducer,
  main: mainReducer,
});
