import {combineReducers} from 'redux';

import todoReducer from './todoReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  todoReducer,
  weatherReducer
});