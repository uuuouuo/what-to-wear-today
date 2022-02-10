import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';
import feedSaga from './feed';

export default function* rootSaga() {
  yield all([fork(commentSaga), fork(feedSaga)]);
}
