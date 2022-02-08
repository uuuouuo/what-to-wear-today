import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';

export default function* rootSaga() {
  yield all([fork(commentSaga)]);
}
