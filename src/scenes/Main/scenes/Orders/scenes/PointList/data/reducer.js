import { combineReducers } from 'redux';
import { reducer as getPointListReducer } from './getPointList/reducer';
import { reducer as getCustomerDetailReducer } from './getCustomerDetail/reducer';
import { reducer as saveCustomerDetailReducer } from './saveCustomerDetail/reducer';

export const reducer = combineReducers({
  getPointList: getPointListReducer,
  getCustomerDetail: getCustomerDetailReducer,
  saveCustomerDetail: saveCustomerDetailReducer,
});
