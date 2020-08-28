import {
  DISPLAY_DATA,
  FETCH_FROM_STORAGE,
  FETCH_NEW_USERS,
} from './types';
import axios from 'axios';
import {store} from '../store';

const id = process.env.API_KEY;
const secret = process.env.API_SECRET;
const params = `client_id=${id}&client_secret=${secret}`;

export const fetchUsers = text => dispatch => {

  const userList = store.getState().userStorage;
  let storedUserData = [];

  if(userList.length)
  {
    storedUserData = userList.filter(user => user.text === text); 
  }

  if(storedUserData.length)
  {
    dispatch({
      type: FETCH_FROM_STORAGE,
      payload: storedUserData[0].data,
      text : text,
      datatype : 'users'
    })
  } else {
    axios
    .get(`https://api.github.com/search/users?q=${text}&${params}&per_page=20`)
    .then(response =>  
      dispatch({
        type: DISPLAY_DATA,
        payload: response.data.items,
        text : text,
        datatype : 'users'
      })
    )
    .then((response) => {
      dispatch({
        type: FETCH_NEW_USERS,
        payload: response.payload,
        text : response.text,
        datatype : 'users'
      }) 
    })
    .catch(err => console.log('Authenticated requests get a higher rate limit.Wait for second and try again...'));
  }
};