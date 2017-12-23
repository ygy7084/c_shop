import update from 'react-addons-update';
import {
  SHOW,
  DISMISS,
} from './actions';

const initialState = {
  status: 'INIT',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return update(state, {
        status: { $set: 'SHOW' },
        id: { $set: action.id },
        content: { $set: action.content },
      });
    case DISMISS:
      return update(state, {
        status: { $set: 'DISMISS' },
      });
    default:
      return state;
  }
};
