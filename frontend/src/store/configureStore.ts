// import { createWrapper } from 'next-redux-wrapper';
// import { createStore, applyMiddleware, Store, Action } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootSaga from '@/sagas';
// import rootReducer from '@/reducers';

// export default createWrapper((): Store<any, Action> => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   store.sagaTask = sagaMiddleware.run(rootSaga);

//   return store;
// });

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
      ? compose(applyMiddleware(...middlewares)) //배포용 미들웨어
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용 미들웨어
  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper<RootState>(configureStore, {
  debug: process.env.NODE_ENV === 'development', // true일 때 디버그가 더 자세히 뜹니다.
});

export default wrapper;
