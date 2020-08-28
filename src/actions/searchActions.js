import {
  CLEAR_DATA,
  DISPLAY_DATA
} from './types';

export const clearData = () => dispatch => {
  dispatch({
    type: CLEAR_DATA
  });
};

export const displayData = (text, datatype, payload) => dispatch => {
  dispatch({
    type: DISPLAY_DATA,
    payload: payload,
    text : text,
    datatype : datatype
  });
};
