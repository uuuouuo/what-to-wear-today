import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  loadMypageFeedsRequest,
  LOAD_MYPAGE_FEED_REQUEST,
  LOAD_MYPAGE_FEED_SUCCESS,
  LOAD_MYPAGE_FEED_FAILURE,
} from '@/action/myPageFeedAction';
import { FeedType } from '@/types/feed';

const api = apiInstance();

function loadMyFeedsAPI(userId: string): Promise<AxiosResponse<FeedType[]>> {
  return api.get(`/feed/mypage?userId=${userId}`);
}

// todo: type 설정 필요
function* loadMyFeeds(action: ReturnType<typeof loadMypageFeedsRequest>) {
  try {
    const result = yield call(loadMyFeedsAPI, action.userId);
    yield put({
      type: LOAD_MYPAGE_FEED_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_MYPAGE_FEED_FAILURE,
      error: err.response,
    });
  }
}
function* watchLoadMyFeeds() {
  yield takeLatest(LOAD_MYPAGE_FEED_REQUEST, loadMyFeeds);
}

export default function* myFeedsSaga() {
  yield all([fork(watchLoadMyFeeds)]);
}
