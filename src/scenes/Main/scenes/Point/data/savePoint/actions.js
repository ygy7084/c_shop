/* global fetch */
import configure from '../../../../../../modules/configure';

export const WAITING = 'Point/data/savePoint/WAITING';
export const SUCCESS = 'Point/data/savePoint/SUCCESS';
export const FAILURE = 'Point/data/savePoint/FAILURE';

const waiting = () => {
  return {
    type: WAITING,
  };
};
const success = ({ customer, point }) => {
  return {
    type: SUCCESS,
    customer,
    point,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    error,
  };
};
export const request = ({ shopId, phone, point }) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          shopId,
          phone,
          point,
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
