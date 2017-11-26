import { combineReducers } from 'redux';
import { reducer as noticeDialogReducer } from './noticeDialog/reducer';
import { reducer as loaderReducer } from './loader/reducer';
import { reducer as authReducer } from './auth/reducer';
import { reducer as logoutReducer } from './logout/reducer';

export const reducer = combineReducers({
  auth: authReducer,
  logout: logoutReducer,
  loader: loaderReducer,
  noticeDialog: noticeDialogReducer,
});
