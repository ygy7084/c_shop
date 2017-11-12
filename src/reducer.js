import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as dataReducer } from './data/reducer';
import { reducer as ordersReducer } from './scenes/Orders/reducer';

export default combineReducers({
  routing: routerReducer,
  data: dataReducer,
  orders: ordersReducer,
});
