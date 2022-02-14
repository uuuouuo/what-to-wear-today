import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';
import feedSaga from './feed';
import myFeedsSaga from './mypageFeeds';
import myCommentsSaga from './mypageComments';

export default function* rootSaga() {
  yield all([fork(commentSaga), fork(feedSaga), fork(myFeedsSaga), fork(myCommentsSaga)]);
}
