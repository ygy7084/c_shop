export const ON = 'data/ballLoader/ON';
export const OFF = 'data/ballLoader/OFF';
export const on = () => {
  return {
    type: ON,
  };
};
export const off = () => {
  return {
    type: OFF,
  };
};
export const manager = (turnOn) => {
  return (dispatch) => {
    if (turnOn) {
      return dispatch(on());
    }
    return dispatch(off());
  };
};
