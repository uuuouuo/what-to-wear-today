export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

export const createCommentRequest = (content: string, feedNo: any) => ({
  type: CREATE_COMMENT_REQUEST,
  feedNo: feedNo,
  request: {
    userId: 'jdb',
    parent: -1,
    content,
    privateMode: 0,
    deleteMode: 0,
  },
});

export const createCommentSuccess = () => ({
  type: CREATE_COMMENT_SUCCESS,
});

export const createCommentFailure = () => ({
  type: CREATE_COMMENT_FAILURE,
});

////

export const loadCommentsRequest = (feedNo: number) => ({
  type: LOAD_COMMENTS_REQUEST,
  feedNo: feedNo,
});

export const loadCommentsSuccess = () => ({
  type: LOAD_COMMENTS_SUCCESS,
});

export const loadCommentsFailure = () => ({
  type: LOAD_COMMENTS_FAILURE,
});

export const updateCommentRequest = (commentNo: number, content: string) => ({
  type: UPDATE_COMMENT_REQUEST,
  commentNo,
  request: {
    content: content,
    privateMode: false,
  },
});

export const updateCommentSuccess = () => ({
  type: UPDATE_COMMENT_SUCCESS,
});

export const updateCommentFailure = () => ({
  type: UPDATE_COMMENT_FAILURE,
});

////

export const deleteCommentRequest = (commentNo: number) => ({
  type: DELETE_COMMENT_REQUEST,
  commentNo: commentNo,
});

export const deleteCommentSuccess = () => ({
  type: DELETE_COMMENT_SUCCESS,
});

export const deleteCommentFailure = () => ({
  type: DELETE_COMMENT_FAILURE,
});

////
