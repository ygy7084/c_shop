/* global fetch, document */
import configure from '../../../../../../../../modules/configure';

export const WAITING = 'Main/orders/pointList/data/getPointList/WAITING';
export const SUCCESS = 'Main/orders/pointList/data/getPointList/SUCCESS';
export const FAILURE = 'Main/orders/pointList/data/getPointList/FAILURE';

const waiting = () => {
  return {
    type: WAITING,
  };
};
const success = (data) => {
  return {
    type: SUCCESS,
    data,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    error,
  };
};
export const request = (list) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point`)
      .then((res) => {
        if (res.ok) { return res.json(); }
        return res.json().then((error) => {
          throw error;
        });
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
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
