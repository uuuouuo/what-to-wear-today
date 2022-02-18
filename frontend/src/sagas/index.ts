import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import commentSaga from './comment';
import feedSaga from './feed';
import feedsSaga from './feeds';
import myFeedsSaga from './myPageFeeds';
import myCommentsSaga from './myPageComments';
import searchedFeedsSaga from './searchedFeeds';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(commentSaga),
    fork(feedSaga),
    fork(feedsSaga),
    fork(myFeedsSaga),
    fork(myCommentsSaga),
    fork(searchedFeedsSaga),
  ]);
}
