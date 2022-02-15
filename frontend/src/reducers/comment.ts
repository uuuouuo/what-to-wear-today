import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
} from '@/action/CommentAction';
import { StateType } from '@/types/comment';

export const initialState: StateType = {
  comments: [],
  createCommentAdding: false,
  createCommentDone: false,
  createCommentError: null,
  deleteCommentDeleting: false,
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
  updateCommentUpdating: false,
  updateCommentDone: false,
  updateCommentError: null,
  deleteCommentDone: false,
  deleteCommentError: null,
};

const reducer = (state: StateType = initialState, action: any) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        createCommentsAdding: true,
        createCommentError: null,
        createCommentDone: false,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentsAdding: false,
        comments: [...state.comments, action.data],
        createCommentDone: true,
      };

    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        createCommentsAdding: false,
        createCommentError: action.error,
      };

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

    case UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        updateCommentUpdating: true,
        updateCommentDone: false,
        updateCommentError: null,
      };

    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.no === action.data.no) {
            return { ...comment, ...action.data };
          }
          return comment;
        }),
        updateCommentUpdating: false,
        updateCommentDone: true,
      };

    case UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        updateCommentUpdating: false,
        updateCommentError: action.error,
      };

    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleteCommentDeleting: true,
        deleteCommentDone: false,
        deleteCommentError: null,
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.no != action.data),
        deleteCommentDeleting: false,
        deleteCommentDone: true,
      };

    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleteCommentDeleting: false,
        deleteCommentError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
