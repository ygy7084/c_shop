/* global fetch, document */
import configure from '../../../../../../modules/configure';
import * as loader from '../../../../../../data/loader/actions';

export const WAITING = 'data/point/WAITING';
export const SUCCESS = 'data/point/SUCCESS';
export const FAILURE = 'data/point/FAILURE';

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
export const request = (point) => {
  return (dispatch) => {
    dispatch(loader.on());
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: { point },
      }),
    })
      .then((res) => {
        dispatch(loader.off());
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
