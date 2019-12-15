import { merge } from 'lodash/object';

import {
  UPDATE_NAV_SUCCEEDED,
  UPDATE_NAV_FAILED
} from './../actions/navActions';


const initialState = {
  activeMainNav: null
};

const navReducer = ( state = initialState, { type, payload } ) => {

  switch (type) {
    case UPDATE_NAV_FAILED:
      return merge({}, state, { activeMainNav: payload });

    case UPDATE_NAV_SUCCEEDED:
      return merge({}, state, { activeMainNav: payload });

    default:
      return state;
  }

};

export default navReducer;
