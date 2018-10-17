import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';

export default combineReducers({
  reducerCount: defaultReducer, // This is a dummy reducer. Remove once an actual reducer is implemented
});
