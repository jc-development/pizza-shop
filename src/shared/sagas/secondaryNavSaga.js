import { call, put, takeLatest } from 'redux-saga/effects';

import {
    SECONDARY_NAV_ACTIVATE_REQUESTED,
    SECONDARY_NAV_ACTIVATE_SUCCEEDED,
    SECONDARY_NAV_ACTIVATE_FAILED
} from './../actions/secondaryNavActions';

function* updateSecondaryNav({ type, payload }) {
  try {
    yield put({
      type: SECONDARY_NAV_ACTIVATE_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: SECONDARY_NAV_ACTIVATE_FAILED,
      payload: error
    });
  }
}

export function* updateSecondaryNavSaga() {
  yield takeLatest(SECONDARY_NAV_ACTIVATE_REQUESTED, updateSecondaryNav);
}
