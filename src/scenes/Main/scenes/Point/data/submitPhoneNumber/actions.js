/* global fetch */
import configure from '../../../../../../modules/configure';

export const WAITING = 'Main/point/data/submitPhoneNumber/WAITING';
export const SUCCESS = 'Main/point/data/submitPhoneNumber/SUCCESS';
export const FAILURE = 'Main/point/data/submitPhoneNumber/FAILURE';

const waiting = () => {
  return {
    type: WAITING,
  };
};
const success = () => {
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
export const request = (phone) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point/submitPhoneNumber`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          phone,
        },
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
          return dispatch(success());
        }
        return dispatch(failure({
          error: null,
          message: 'response에 data 프로퍼티가 없습니다.'
        }));
      })
      .catch(e => dispatch(failure(e)));
  };
};
