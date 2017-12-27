/* global fetch, document */
import configure from '../../../../../../modules/configure';

export const WAITING = 'Main/orders/data/getOrders/WAITING';
export const SUCCESS = 'Main/orders/data/getOrders/SUCCESS';
export const FAILURE = 'Main/orders/data/getOrders/FAILURE';
export const ADD = 'Main/orders/data/deliver/ADD';
export const REMOVE = 'Main/orders/data/deliver/REMOVE';

const waiting = () => {
  return {
    type: WAITING,
  };
};
const success = (orders) => {
  return {
    type: SUCCESS,
    orders,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    error,
  };
};
export const request = (shopId) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/order/post`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { shopId },
      }),
    })
      .then((res) => {
        if (res.ok) { return res.json(); }
        return res.json().then((error) => {
          throw error;
        });
      })
      .then((res) => {
        if (res.data) {
          return dispatch(success(res.data));
        }
        return dispatch(failure({
          error: null,
          message: 'response에 data 프로퍼티가 없습니다.'
        }));
      })
      .catch(e => dispatch(failure(e)));
  };
};
export const add = (order) => {
  return {
    type: ADD,
    order,
  };
};
export const remove = (_id) => {
  return {
    type: REMOVE,
    _id,
  };
};
