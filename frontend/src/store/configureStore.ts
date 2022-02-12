import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import rootReducer from '@/reducers';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/sagas';
import { RootState } from '@/reducers/index';
import { compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore: MakeStore<RootState> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper<RootState>(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
