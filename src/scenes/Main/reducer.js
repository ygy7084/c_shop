import { combineReducers } from 'redux';
import { reducer as ordersReducer } from './scenes/Orders/reducer';
import { reducer as pointReducer } from './scenes/Point/reducer';

export const reducer = combineReducers({
  orders: ordersReducer,
  point: pointReducer,
});
