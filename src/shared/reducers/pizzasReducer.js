import { merge } from 'lodash/object';

import {
  FETCH_PIZZA_LIST_SUCCEEDED,
  FETCH_PIZZA_LIST_FAILED
} from './../actions/pizzasActions';

const initialState = {
  pizzas: null
};

const pizzasReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case FETCH_PIZZA_LIST_FAILED:
      return merge({}, state, { pizzas: payload });

    case FETCH_PIZZA_LIST_SUCCEEDED:
      return merge( {}, state, { pizzas: payload } );

    default:
      return state;
  }
};

export default pizzasReducer;
