/* global fetch, document */
import configure from '../../../../modules/configure';

export const WAITING = 'data/cancel/WAITING';
export const SUCCESS = 'data/cancel/SUCCESS';
export const FAILURE = 'data/cancel/FAILURE';

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
    return fetch(`${configure.SERVER}/api/order/cancel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        data: { _id },
      }),
    })
      .then((res) => {
        console.log(res);
        if (res) { return res.json(); }
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
