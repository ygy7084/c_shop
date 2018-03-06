/* global fetch, document */
import configure from '../../../../../../../../modules/configure';

export const WAITING = 'Main/orders/pointList/data/saveCustomerDetail/WAITING';
export const SUCCESS = 'Main/orders/pointList/data/saveCustomerDetail/SUCCESS';
export const FAILURE = 'Main/orders/pointList/data/saveCustomerDetail/FAILURE';

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
export const request = (customer) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/customer/memo`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
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
