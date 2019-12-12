import { call, put, takeLatest } from 'redux-saga/effects';

import {
  UPDATE_NAV_REQUESTED,
  UPDATE_NAV_SUCCEEDED,
  UPDATE_NAV_FAILED
} from './../actions/navActions';

function* updateNav({type, payload}) {
  const currentUrl = payload.length > 1 ? payload.replace('/', '') : 'home';

  try {
    yield put({
      type: UPDATE_NAV_SUCCEEDED,
      payload: currentUrl
    });
  } catch (error) {
    yield put({
      type: UPDATE_NAV_FAILED,
      payload: error
    });
  }
}

export function* updateMainNavSaga() {
  yield takeLatest(UPDATE_NAV_REQUESTED, updateNav);
}
