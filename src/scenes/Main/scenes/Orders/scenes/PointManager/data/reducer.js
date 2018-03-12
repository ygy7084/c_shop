import { combineReducers } from 'redux';
import { reducer as getCustomerPointReducer } from './getCustomerPoint/reducer';
import { reducer as useCustomerPointReducer } from './useCustomerPoint/reducer';
import { reducer as requestPhoneNumberReducer } from './requestPhoneNumber/reducer';

export const reducer = combineReducers({
  getCustomerPoint: getCustomerPointReducer,
  useCustomerPoint: useCustomerPointReducer,
  requestPhoneNumber: requestPhoneNumberReducer,
});
