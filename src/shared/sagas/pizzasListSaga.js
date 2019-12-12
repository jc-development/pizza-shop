import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  FETCH_PIZZA_LIST_REQUESTED,
  FETCH_PIZZA_LIST_SUCCEEDED,
  FETCH_PIZZA_LIST_FAILED
} from './../actions/pizzasActions';

const url = 'http://jsonplaceholder.typicode.com/users';

const fetchPizzasFromApi = () => fetch(url)
  .then( response => {
    if (!response.ok) {
      console.log('error');
    } else {
      console.log('response: ', response);
      return response.json();
    }
  })
  .then( response => response)
  .catch(e => console.log('error on fetch: ', e));

function* fetchPizzas() {
  try {
    const pizzas = yield call(fetchPizzasFromApi);

    console.log('pizzas:', pizzas);

    yield put({
        type: FETCH_PIZZA_LIST_SUCCEEDED,
        payload: pizzas
      });
  } catch (error) {
    console.log('error: ', error);

    yield put({
      type: FETCH_PIZZA_LIST_FAILED,
      payload: error
    });
  }
}

export function* fetchPizzasListSaga() {
  yield takeLatest(FETCH_PIZZA_LIST_REQUESTED, fetchPizzas);
};
