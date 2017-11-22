import { combineReducers } from 'redux';
import { reducer as noticeDialogReducer } from './noticeDialog/reducer';
import { reducer as loaderReducer } from './loader/reducer';
import { reducer as authReducer } from './auth/reducer';

export const reducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  noticeDialog: noticeDialogReducer,
});
