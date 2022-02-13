import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  COMMENT_CREATE,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE,
} from 'action/commentAction';
import { StateType } from '@/types/comment';

export const initialState: StateType = {
  comments: [],
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
  CommentAdding: false,
  createCommentDone: false,
  createCommentError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_COMMENTS_REQUEST:
      return {
        ...state,
        loadCommentsLoading: true,
        loadCommentsError: null,
        loadCommentsDone: false,
      };

    case LOAD_COMMENTS_SUCCESS:
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

    case COMMENT_CREATE:
      return {
        ...state,
        CommentsAdding: true,
        createCommentError: null,
        createCommentDone: false,
      };

    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        CommentsAdding: false,
        comments: action.data,
        createCommentDone: true,
      };

    case COMMENT_CREATE_FAILURE:
      return {
        ...state,
        CommentsAdding: false,
        createCommentError: action.error.status,
      };

    default:
      return state;
  }
};

export default reducer;
