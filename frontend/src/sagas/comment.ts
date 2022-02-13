import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
} from 'action/commentAction';
import { CommentType } from '@/types/comment';

const api = apiInstance();

function loadCommentsAPI(feedNo: number): Promise<AxiosResponse<CommentType[]>> {
  return api.get(`/comment/${feedNo}`);
}

// todo: type 설정 필요
function* loadComments(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(
      loadCommentsAPI,
      action.feedNo,
    );
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: result,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error: err.response,
    });
  }
}
function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

export default function* commentSaga() {
  yield all([fork(watchLoadComments)]);
}
