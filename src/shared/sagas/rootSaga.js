import { all, call } from 'redux-saga/effects';

import { updateMainNavSaga } from './navUpdateSaga';
import { updateSecondaryNavSaga } from './secondaryNavSaga';
import { fetchPizzasListSaga } from './pizzasListSaga';

export default function* rootSaga() {
  yield all([
    call(updateMainNavSaga),
    call(updateSecondaryNavSaga),
    call(fetchPizzasListSaga)
  ]);
}
