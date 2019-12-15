import { combineReducers } from 'redux';
import pizzasReducer from './pizzasReducer';
import navReducer from './navReducer';
import secondaryNavReducer from './secondaryNavReducer';

export default combineReducers({
  pizzasState: pizzasReducer,
  navState: navReducer,
  secondaryNavState: secondaryNavReducer
});
