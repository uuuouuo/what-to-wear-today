export const LOAD_MYPAGE_COMMENT_REQUEST = 'LOAD_MYPAGE_COMMENT_REQUEST';
export const LOAD_MYPAGE_COMMENT_SUCCESS = 'LOAD_MYPAGE_COMMENT_SUCCESS';
export const LOAD_MYPAGE_COMMENT_FAILURE = 'LOAD_MYPAGE_COMMENT_FAILURE';

export const loadMypageCOMMENTsRequest = (userId: string) => ({
  type: LOAD_MYPAGE_COMMENT_REQUEST,
  payload: userId,
});

export const loadMypageCOMMENTsSuccess = () => ({
  type: LOAD_MYPAGE_COMMENT_SUCCESS,
});

export const loadMypageCOMMENTsFailure = () => ({
  type: LOAD_MYPAGE_COMMENT_FAILURE,
});
