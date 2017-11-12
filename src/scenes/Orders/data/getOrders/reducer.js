import update from 'react-addons-update';
import {
  WAITING,
  SUCCESS,
  FAILURE,
  ADD,
  REMOVE,
} from './actions';

const initialState = {
  status: 'INIT',
  orders: [],
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
        orders: { $set: action.orders },
      });
    case FAILURE:
      return update(state, {
        status: { $set: 'FAILURE' },
        orders: { $set: [] },
      });
    case ADD:
      return update(state, {
        orders: { $push: [action.order] },
      });
    case REMOVE:
      const newArr = JSON.parse(JSON.stringify(state.orders));
      const found = newArr.find(o => o._id === action._id);
      found.delivered = true;
      return update(state, {
        orders: { $set: newArr },
      });
    default:
      return state;
  }
};
