import update from 'react-addons-update';
import {
  WAITING,
  SUCCESS,
  FAILURE,
} from './actions';

const initialState = {
  status: 'INIT',
  customer: undefined,
  point: 0,
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
        customer: { $set: action.customer },
        point: { $set: action.point },
      });
    case FAILURE:
      return update(state, {
        status: { $set: 'FAILURE' },
        customer: { $set: null },
        point: { $set: 0 },
      });
    default:
      return state;
  }
};
