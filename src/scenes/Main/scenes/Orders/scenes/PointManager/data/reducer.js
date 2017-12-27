import { combineReducers } from 'redux';
import { reducer as getCustomerPointReducer } from './getCustomerPoint/reducer';
import { reducer as useCustomerPointReducer } from './useCustomerPoint/reducer';

export const reducer = combineReducers({
  getCustomerPoint: getCustomerPointReducer,
  useCustomerPoint: useCustomerPointReducer,
});
