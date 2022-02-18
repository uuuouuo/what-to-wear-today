export const LOAD_MYPAGE_FEED_REQUEST = 'LOAD_MYPAGE_Feed_REQUEST';
export const LOAD_MYPAGE_FEED_SUCCESS = 'LOAD_MYPAGE_Feed_SUCCESS';
export const LOAD_MYPAGE_FEED_FAILURE = 'LOAD_MYPAGE_Feed_FAILURE';

export const loadMypageFeedsRequest = (userId: string) => ({
  type: LOAD_MYPAGE_FEED_REQUEST,
  userId,
});

export const loadMypageFeedsSuccess = () => ({
  type: LOAD_MYPAGE_FEED_SUCCESS,
});

export const loadMypageFeedsFailure = () => ({
  type: LOAD_MYPAGE_FEED_FAILURE,
});
