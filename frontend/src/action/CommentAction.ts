export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const loadCommentsRequest = (feedNo: number) => ({
  type: LOAD_COMMENTS_REQUEST,
  payload: feedNo,
});

export const loadCommentsSuccess = () => ({
  type: LOAD_COMMENTS_SUCCESS,
});

export const loadCommentsFailure = () => ({
  type: LOAD_COMMENTS_FAILURE,
});
