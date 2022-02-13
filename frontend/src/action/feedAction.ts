export const LOAD_FEED_REQUEST = 'LOAD_FEED_REQUEST';
export const LOAD_FEED_SUCCESS = 'LOAD_FEED_SUCCESS';
export const LOAD_FEED_FAILURE = 'LOAD_FEED_FAILURE';

export const loadFeedRequest = (feedNo: number) => ({
  type: LOAD_FEED_REQUEST,
  payload: feedNo,
});

export const loadFeedSuccess = () => ({
  type: LOAD_FEED_SUCCESS,
});

export const loadFeedFailure = () => ({
  type: LOAD_FEED_FAILURE,
});
