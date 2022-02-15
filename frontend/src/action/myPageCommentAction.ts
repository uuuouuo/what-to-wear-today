export const LOAD_MYPAGE_COMMENT_REQUEST = 'LOAD_MYPAGE_COMMENT_REQUEST';
export const LOAD_MYPAGE_COMMENT_SUCCESS = 'LOAD_MYPAGE_COMMENT_SUCCESS';
export const LOAD_MYPAGE_COMMENT_FAILURE = 'LOAD_MYPAGE_COMMENT_FAILURE';

export const loadMypageCommentsRequest = (userId: string) => ({
  type: LOAD_MYPAGE_COMMENT_REQUEST,
  userId,
});

export const loadMypageCommentsSuccess = () => ({
  type: LOAD_MYPAGE_COMMENT_SUCCESS,
});

export const loadMypageCommentsFailure = () => ({
  type: LOAD_MYPAGE_COMMENT_FAILURE,
});
