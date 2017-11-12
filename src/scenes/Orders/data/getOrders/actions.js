/* global fetch, document */
export const WAITING = 'data/getOrders/WAITING';
export const SUCCESS = 'data/getOrders/SUCCESS';
export const FAILURE = 'data/getOrders/FAILURE';
export const ADD = 'data/deliver/ADD';
export const REMOVE = 'data/deliver/REMOVE';

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
export const request = () => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch('/api/order', {
      method: 'GET',
      headers: {
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
      },
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
