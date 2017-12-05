import { combineReducers } from 'redux';

import { reducer as getOrdersReducer } from './getOrders/reducer';
import { reducer as deliverReducer } from './deliver/reducer';
import { reducer as cancelReducer } from './cancel/reducer';

export const reducer = combineReducers({
  getOrders: getOrdersReducer,
  deliver: deliverReducer,
  cancel: cancelReducer,
});
