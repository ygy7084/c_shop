/* global fetch, document */
import configure from '../../../../../../../../modules/configure';

export const WAITING = 'Main/orders/pointManager/data/useCustomerPoint/WAITING';
export const SUCCESS = 'Main/orders/pointManager/data/useCustomerPoint/SUCCESS';
export const FAILURE = 'Main/orders/pointManager/data/useCustomerPoint/FAILURE';

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
export const request = ({ shopId, customerId, point, }) => {
  return (dispatch) => {
    dispatch(waiting());
    return fetch(`${configure.SERVER}/api/point/usePoint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          shopId,
          customerId,
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
