import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';
import feedSaga from './feed';
import myFeedsSaga from './myPageFeeds';
import myCommentsSaga from './myPageComments';

export default function* rootSaga() {
  yield all([fork(commentSaga), fork(feedSaga), fork(myFeedsSaga), fork(myCommentsSaga)]);
}
