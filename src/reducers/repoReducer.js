import {FETCH_NEW_REPOS} from '../actions/types';

const initialState = [];

const appendObjTo = (thatArray, newObj)  => {
  const frozenObj = Object.freeze(newObj);
  return Object.freeze(thatArray.concat(frozenObj));
}

export default function (state = initialState, action) {
  
  switch (action.type) {

    case FETCH_NEW_REPOS:
      let newRepoData = { text : action.text, data : action.payload };
      let newState = appendObjTo(state, newRepoData);
      return newState;

    default:
      return state;
  }
}