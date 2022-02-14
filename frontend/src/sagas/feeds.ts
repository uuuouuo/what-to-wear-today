import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';
import { LOAD_FEEDS_REQUEST, LOAD_FEEDS_SUCCESS, LOAD_FEEDS_FAILURE } from '@/action/feedAction';
import { FeedType } from '@/types/feed';

const api = apiInstance();

function* loadFeeds(action: any) {
  console.log(action);
  try {
    const result: Promise<AxiosResponse<FeedType[]>> = yield call(loadFeedsAPI, action.regionNo);
    yield put({
      type: LOAD_FEEDS_SUCCESS,
      data: result.data.content,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_FEEDS_FAILURE,
      error: err.name,
    });
  }
}

function loadFeedsAPI(regionNo: number): Promise<AxiosResponse<FeedType[]>> {
  return api.get(`/feed/${regionNo}`);
}

//TAKELATEST //

function* watchLoadFeeds() {
  yield takeLatest(LOAD_FEEDS_REQUEST, loadFeeds);
}

export default function* feedsSaga() {
  yield all([fork(watchLoadFeeds)]);
}
