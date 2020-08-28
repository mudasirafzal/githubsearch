import {FETCH_NEW_USERS} from '../actions/types';

const initialState = [];

const appendObjTo = (thatArray, newObj)  => {
  const frozenObj = Object.freeze(newObj);
  return Object.freeze(thatArray.concat(frozenObj));
}

export default function (state = initialState, action) {
  
  switch (action.type) {

    case FETCH_NEW_USERS:
      	let newUserData = { text : action.text, data : action.payload };
      	let newState = appendObjTo(state, newUserData);
      	return newState;

    default:
      return state;
  }
}