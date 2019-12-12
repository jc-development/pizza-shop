import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import rootReducer from '../reducers';

const configureStore = preloadedState => {
  const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const reduxMiddlewares = [ sagaMiddleware ];

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers( applyMiddleware(...reduxMiddlewares) )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};

export default configureStore;
