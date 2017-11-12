/* global fetch, document */
export const WAITING = 'data/deliver/WAITING';
export const SUCCESS = 'data/deliver/SUCCESS';
export const FAILURE = 'data/deliver/FAILURE';

const waiting = () => {
  return {
    type: WAITING,
  };
};
const success = (orders) => {
  return {
    type: SUCCESS,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    error,
  };
};
export const request = (_id) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch('/api/order/deliver', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        data: { _id },
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
