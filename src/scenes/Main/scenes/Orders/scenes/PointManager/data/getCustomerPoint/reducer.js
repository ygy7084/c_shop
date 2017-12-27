import update from 'react-addons-update';
import {
  WAITING,
  SUCCESS,
  FAILURE,
} from './actions';

const initialState = {
  status: 'INIT',
  data: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WAITING:
      return update(state, {
        status: { $set: 'WAITING' },
      });
    case SUCCESS:
      return update(state, {
        status: { $set: 'SUCCESS' },
        data: { $set: action.data },
      });
    case FAILURE:
      return update(state, {
        status: { $set: 'FAILURE' },
        data: { $set: null },
      });
    default: {
      return state;
    }
  }
};
