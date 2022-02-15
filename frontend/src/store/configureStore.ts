import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, Store, Action } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '@/sagas';
import rootReducer from '@/reducers';

export default createWrapper((): Store<any, Action> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
});
