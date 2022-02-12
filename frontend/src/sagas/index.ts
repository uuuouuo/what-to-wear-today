import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';
import myFeedsSaga from './mypageFeeds';
import myCommentsSaga from './mypageComments';

export default function* rootSaga() {
  yield all([fork(commentSaga), fork(myFeedsSaga), fork(myCommentsSaga)]);
}
