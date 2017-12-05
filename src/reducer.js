import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as dataReducer } from './data/reducer';
import { reducer as ordersReducer } from './scenes/Orders/reducer';
import { reducer as entryReducer } from './scenes/Entry/reducer';
import { reducer as pointReducer } from './scenes/Point/reducer';

export default combineReducers({
  routing: routerReducer,
  data: dataReducer,
  orders: ordersReducer,
  entry: entryReducer,
  point: pointReducer,
});
