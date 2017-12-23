/* global fetch */

export const SHOW = 'data/snackBar/SHOW';
export const DISMISS = 'data/snackBar/DISMISS';
export const show = (id, content) => {
  return dispatch => dispatch({
    type: SHOW,
    id,
    content,
  });
};
export const dismiss = () => {
  return dispatch => dispatch({
    type: DISMISS,
  });
};
