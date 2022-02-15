export const LOAD_FEEDS_REQUEST = 'LOAD_FEEDS_REQUEST';
export const LOAD_FEEDS_SUCCESS = 'LOAD_FEEDS_SUCCESS';
export const LOAD_FEEDS_FAILURE = 'LOAD_FEEDS_FAILURE';

export const loadFeedsRequest = (regionNo: number) => ({
  type: LOAD_FEEDS_REQUEST,
  regionNo: regionNo,
});

export const loadFeedsSuccess = () => ({
  type: LOAD_FEEDS_SUCCESS,
});

export const loadFeedsFailure = () => ({
  type: LOAD_FEEDS_FAILURE,
});
