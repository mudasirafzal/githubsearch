import {
  CLEAR_DATA,
  DISPLAY_DATA,
  FETCH_FROM_STORAGE,
} from '../actions/types';

const initialState = {
  text : '',
  dataType : 'users',
  data : []
};

export default function (state = initialState, action) {
  
  switch (action.type) {

    case CLEAR_DATA:
      return initialState;

    case DISPLAY_DATA:
      return {
        ...state,
        text : action.text,
        dataType : action.datatype,
        data : action.payload,
      };

    case FETCH_FROM_STORAGE:
      return {
        ...state,
        text : action.text,
        dataType : action.datatype,
        data : action.payload,
      };

    default:
      return state;
  }
}