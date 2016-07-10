import actionTypes from '../constants/serials.jsx';

export function addSerial(name) {
  return { type: actionTypes.ADD_SERIAL, name };
}