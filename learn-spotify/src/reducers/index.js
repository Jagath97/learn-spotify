import { combineReducers } from 'redux';
import updateUser from './userdetails';
const combinedReducers = combineReducers({
  user: updateUser
});
export default combinedReducers;
