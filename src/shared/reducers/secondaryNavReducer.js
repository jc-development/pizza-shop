import { merge } from 'lodash/object';

import {
  SECONDARY_NAV_ACTIVATE_SUCCEEDED,
  SECONDARY_NAV_ACTIVATE_FAILED,
  SECONDARY_NAV_LOAD_VIDEO_SUCCEEDED,
  SECONDARY_NAV_LOAD_VIDEO_FAILED
} from './../actions/secondaryNavActions';

const initialState = {
  isOpen: false,
  secondaryNavVideo: null
};

const secondaryNavReducer = ( state = initialState, { type, payload } ) => {

  switch (type) {
    case SECONDARY_NAV_ACTIVATE_FAILED:
      return merge({}, state, { isOpen: payload });

    case SECONDARY_NAV_ACTIVATE_SUCCEEDED:
      return merge({}, state, { isOpen: payload });

    case SECONDARY_NAV_LOAD_VIDEO_FAILED:
      return merge({}, state, { secondaryNavVideo: payload });

    case SECONDARY_NAV_LOAD_VIDEO_SUCCEEDED:
      return merge({}, state, { secondaryNavVideo: payload });

    default:
      return state;
  }

};

export default secondaryNavReducer;
