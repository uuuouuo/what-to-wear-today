export const CREATE_FEED_REQUEST = 'CREATE_FEED_REQUEST';
export const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS';
export const CREATE_FEED_FAILURE = 'CREATE_FEED_FAILURE';
export const LOAD_FEED_REQUEST = 'LOAD_FEED_REQUEST';
export const LOAD_FEED_SUCCESS = 'LOAD_FEED_SUCCESS';
export const LOAD_FEED_FAILURE = 'LOAD_FEED_FAILURE';
export const UPDATE_FEED_REQUEST = 'UPDATE_FEED_REQUEST';
export const UPDATE_FEED_SUCCESS = 'UPDATE_FEED_SUCCESS';
export const UPDATE_FEED_FAILURE = 'UPDATE_FEED_FAILURE';
export const DELETE_FEED_REQUEST = 'DELETE_FEED_REQUEST';
export const DELETE_FEED_SUCCESS = 'DELETE_FEED_SUCCESS';
export const DELETE_FEED_FAILURE = 'DELETE_FEED_FAILURE';

export const createFeedRequest = (value, files, date, privateMode, region, temperature) => ({
  type: CREATE_FEED_REQUEST,
  request: {
    userId: 'jdb',
    content: value,
    region,
    weather: temperature,
    photoDate: date,
    privateMode,
    tags: [],
  },
  images: files,
});

export const createFeedSuccess = () => ({
  type: CREATE_FEED_SUCCESS,
});

export const createFeedFailure = () => ({
  type: CREATE_FEED_FAILURE,
});

/// /

export const loadFeedRequest = (feedNo: number) => ({
  type: LOAD_FEED_REQUEST,
  feedNo,
});

export const loadFeedSuccess = () => ({
  type: LOAD_FEED_SUCCESS,
});

export const loadFeedFailure = () => ({
  type: LOAD_FEED_FAILURE,
});
/// /

export const updateFeedRequest = (feedNo) => ({
  type: UPDATE_FEED_REQUEST,
  feedNo,
});

export const updateFeedSuccess = () => ({
  type: UPDATE_FEED_SUCCESS,
});

export const updateFeedFailure = () => ({
  type: UPDATE_FEED_FAILURE,
});

/// /

export const deleteFeedRequest = (feedNo: number) => ({
  type: DELETE_FEED_REQUEST,
  feedNo,
});

export const deleteFeedSuccess = () => ({
  type: DELETE_FEED_SUCCESS,
});

export const deleteFeedFailure = () => ({
  type: DELETE_FEED_FAILURE,
});
