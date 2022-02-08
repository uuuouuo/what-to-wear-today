import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
} from '@/action/CommentAction';

export const initialState = {
  comments: [],
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS_REQUEST:
      return {
        ...state,
        loadCommentsLoading: true,
        loadCommentsError: null,
        loadCommentsDone: false,
      };

    case LOAD_COMMENTS_SUCCESS:
      // const comments = action.data.filter(comment = > !comment.parent).map();
      return {
        ...state,
        loadCommentsLoading: false,
        comments: action.data,
        loadCommentsDone: true,
      };

    case LOAD_COMMENTS_FAILURE:
      return {
        ...state,
        loadCommentsLoading: false,
        loadCommentsError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
