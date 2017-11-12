import { combineReducers } from 'redux';
import { reducer as noticeDialogReducer } from './noticeDialog/reducer';

export const reducer = combineReducers({
  noticeDialog: noticeDialogReducer,
});
