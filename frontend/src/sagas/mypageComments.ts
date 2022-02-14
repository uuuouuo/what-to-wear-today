import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  LOAD_MYPAGE_COMMENT_REQUEST,
  LOAD_MYPAGE_COMMENT_SUCCESS,
  LOAD_MYPAGE_COMMENT_FAILURE,
} from '@/action/MypageCommentAction';

import { CommentType } from 'types/myPageComments';

const api = apiInstance();

function loadMyCommentsAPI(userId: string): Promise<AxiosResponse<CommentType[]>> {
  return api.get(`/comment/mypage?userId=${userId}`);
}

// todo: type 설정 필요
function* loadMyComments(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(
      loadMyCommentsAPI,
      action.userId,
    );
    yield put({
      type: LOAD_MYPAGE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_MYPAGE_COMMENT_FAILURE,
      error: err.response,
    });
  }
}
function* watchLoadMyComments() {
  yield takeLatest(LOAD_MYPAGE_COMMENT_REQUEST, loadMyComments);
}

export default function* myCommentsSaga() {
  yield all([fork(watchLoadMyComments)]);
}
