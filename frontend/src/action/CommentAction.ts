export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
// export const COMMENT_CREATE = 'COMMENT_CREATE';
// export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS';
// export const COMMENT_CREATE_FAILURE = 'COMMENT_CREATE_FAILURE';

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

// export const commentCreate = (content: string, feed: any) => ({
//   type: COMMENT_CREATE,
//   feedNo: feed[0].no,
//   request: {
//     userId: 'a123456789',
//     parent: null,
//     content: content,
//     privateMode: 0,
//     deleteMode: 0,
//   },
// });

// export const commentCreateSuccess = () => ({
//   type: COMMENT_CREATE_SUCCESS,
// });

// export const commentCreateFailure = () => ({
//   type: COMMENT_CREATE_FAILURE,
// });
