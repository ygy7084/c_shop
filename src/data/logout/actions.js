/* global fetch */
import removeCookie from '../../modules/removeCookie';
import * as loader from '../loader/actions';

export const WAITING = 'data/logout/WAITING';
export const SUCCESS = 'data/logout/SUCCESS';
export const FAILURE = 'data/logout/FAILURE';

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
export const request = () => {
  return (dispatch) => {
    dispatch(loader.on());
    dispatch(waiting());
    return new Promise((resolve, reject) => {
      removeCookie('account');
      dispatch(loader.off());
      dispatch(success());
      resolve();
    });
  };
};
