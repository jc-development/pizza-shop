import { merge } from 'lodash/object';

import {
  SECONDARY_NAV_ACTIVATE_SUCCEEDED,
  SECONDARY_NAV_ACTIVATE_FAILED
} from './../actions/secondaryNavActions';

const initialState = {
  isOpen: false
};

const secondaryNavReducer = ( state = initialState, { type, payload } ) => {

  switch (type) {
    case SECONDARY_NAV_ACTIVATE_FAILED:
      return merge({}, state, { isOpen: payload });

    case SECONDARY_NAV_ACTIVATE_SUCCEEDED:
      return merge({}, state, { isOpen: payload });

    default:
      return state;
  }

};

export default secondaryNavReducer;
