import { FETCH_FROM_STORAGE, FETCH_NEW_REPOS, DISPLAY_DATA } from './types';
import axios from 'axios';
import {store} from '../store';

const id = process.env.API_KEY;
const secret = process.env.API_SECRET;
const params = `client_id=${id}&client_secret=${secret}`;

export const fetchRepos = text => dispatch => {

  const repoList = store.getState().repoStorage;
  let storedRepoData = [];

  if(repoList.length)
  {
    storedRepoData = repoList.filter(repo => repo.text === text); 
  }

  if(storedRepoData.length)
  {
    dispatch({
      type: FETCH_FROM_STORAGE,
      payload: storedRepoData[0].data,
      text : text,
      datatype : 'repos'
    })
  } else {
    axios
    .get(`https://api.github.com/search/repositories?q=${text}&${params}&per_page=20`)
    .then(response =>  
      dispatch({
        type: DISPLAY_DATA,
        payload: response.data.items,
        text : text,
        datatype : 'repos'
      })
    )
    .then(response =>
      dispatch({
        type: FETCH_NEW_REPOS,        
        payload: response.payload,
        text : response.text,
        datatype : 'repos'
      })
    )
    .catch(err => console.log(err));
  }
};