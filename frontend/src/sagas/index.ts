import { all, fork } from 'redux-saga/effects';
import commentSaga from './comment';
import feedSaga from './feed';
import feedsSaga from './feeds';
import myFeedsSaga from './myPageFeeds';
import myCommentsSaga from './myPageComments';
import searchedFeedsSaga from './searchedFeeds';

export default function* rootSaga() {
  yield all([
    fork(commentSaga),
    fork(feedSaga),
    fork(feedsSaga),
    fork(myFeedsSaga),
    fork(myCommentsSaga),
    fork(searchedFeedsSaga),
  ]);
}
