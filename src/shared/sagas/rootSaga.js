import { all, call } from 'redux-saga/effects';

import { updateMainNavSaga } from './navUpdateSaga';
import { fetchPizzasListSaga } from './pizzasListSaga';

export default function* rootSaga() {
  yield all([
    call(updateMainNavSaga),
    call(fetchPizzasListSaga)
  ]);
}
