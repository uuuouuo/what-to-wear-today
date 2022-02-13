export const LOAD_MYPAGE_Feed_REQUEST = 'LOAD_MYPAGE_Feed_REQUEST';
export const LOAD_MYPAGE_Feed_SUCCESS = 'LOAD_MYPAGE_Feed_SUCCESS';
export const LOAD_MYPAGE_Feed_FAILURE = 'LOAD_MYPAGE_Feed_FAILURE';

export const loadMypageFeedsRequest = (userId: string) => ({
  type: LOAD_MYPAGE_Feed_REQUEST,
  userId: userId,
});

export const loadMypageFeedsSuccess = () => ({
  type: LOAD_MYPAGE_Feed_SUCCESS,
});

export const loadMypageFeedsFailure = () => ({
  type: LOAD_MYPAGE_Feed_FAILURE,
});
