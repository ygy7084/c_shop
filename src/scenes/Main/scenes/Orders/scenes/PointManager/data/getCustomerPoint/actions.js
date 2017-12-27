/* global fetch, document */
import configure from '../../../../../../../../modules/configure';

export const WAITING = 'Main/orders/pointManager/data/getCustomerPoint/WAITING';
export const SUCCESS = 'Main/orders/pointManager/data/getCustomerPoint/SUCCESS';
export const FAILURE = 'Main/orders/pointManager/data/getCustomerPoint/FAILURE';

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
export const request = (customerPhone) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point/${customerPhone}`, {
      method: 'GET',
      headers: {
        pragma: 'no-cache',
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
