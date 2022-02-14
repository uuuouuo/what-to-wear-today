import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';
import feedSaga from './feed';
import feedsSaga from './feeds';

export default function* rootSaga() {
  yield all([fork(commentSaga), fork(feedSaga), fork(feedsSaga)]);
}
