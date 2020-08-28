import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import repoReducer from './repoReducer';

export default combineReducers({
  data: searchReducer,
  userStorage: userReducer,
  repoStorage: repoReducer,
});
