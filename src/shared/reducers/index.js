import { combineReducers } from 'redux';
import pizzasReducer from './pizzasReducer';
import navReducer from './navReducer';

export default combineReducers({
  pizzasState: pizzasReducer,
  navState: navReducer
});
