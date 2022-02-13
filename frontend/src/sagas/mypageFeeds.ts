import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  LOAD_MYPAGE_Feed_REQUEST,
  LOAD_MYPAGE_Feed_SUCCESS,
  LOAD_MYPAGE_Feed_FAILURE,
} from '@/action/MypageFeedAction';

const api = apiInstance();

function loadMyFeedsAPI(userId: string): Promise<AxiosResponse<any[]>> {
  return api.get(`/feed/mypage?userId=${userId}`);
}

// todo: type 설정 필요
function* loadMyFeeds(action: any) {
  try {
    const result: Promise<AxiosResponse<any[]>> = yield call(loadMyFeedsAPI, action.userId);
    yield put({
      type: LOAD_MYPAGE_Feed_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_MYPAGE_Feed_FAILURE,
      error: err.response,
    });
  }
}
function* watchLoadMyFeeds() {
  yield takeLatest(LOAD_MYPAGE_Feed_REQUEST, loadMyFeeds);
}

export default function* myFeedsSaga() {
  yield all([fork(watchLoadMyFeeds)]);
}
