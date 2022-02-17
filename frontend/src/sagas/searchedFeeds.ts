import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';
import {
  LOAD_SEARCH_FEEDS_REQUEST,
  LOAD_SEARCH_FEEDS_SUCCESS,
  LOAD_SEARCH_FEEDS_FAILURE,
} from '@/action/searchFeedsAction';
import { FeedsType } from '@/types/searchedFeeds';

const api = apiInstance();

function* loadSearchedFeeds(action: any) {
  try {
    const result: Promise<AxiosResponse<FeedsType[]>> = yield call(
      loadSearchedFeedsAPI,
      action.searchUrl,
    );
    yield put({
      type: LOAD_SEARCH_FEEDS_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_SEARCH_FEEDS_FAILURE,
      error: err.name,
    });
  }
}

function loadSearchedFeedsAPI(searchUrl: string): Promise<AxiosResponse<FeedsType[]>> {
  return api.get(`${searchUrl}`);
}

function* watchLoadSearchedFeeds() {
  yield takeLatest(LOAD_SEARCH_FEEDS_REQUEST, loadSearchedFeeds);
}

export default function* searchedFeedsSaga() {
  yield all([fork(watchLoadSearchedFeeds)]);
}
