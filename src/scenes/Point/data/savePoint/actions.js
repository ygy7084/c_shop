/* global fetch */
import configure from '../../../../modules/configure';
import * as loader from '../../../../data/loader/actions';

export const WAITING = 'Point/data/savePoint/WAITING';
export const SUCCESS = 'Point/data/savePoint/SUCCESS';
export const FAILURE = 'Point/data/savePoint/FAILURE';

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
export const request = (input) => {
  return (dispatch) => {
    dispatch(loader.on());
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          phone: input.phone,
          point: input.point,
        },
      }),
    })
      .then((res) => {
        dispatch(loader.off());
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
