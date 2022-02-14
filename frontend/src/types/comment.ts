interface CommentType {
  no: number;
  nickname: string;
  feedNo: number;
  parent: number | null;
  content: string;
  date: Date;
}
interface CommentRequestType {
  userId: string;
  parent: number;
  content: string;
  privateMode: boolean;
  deleteMode: boolean;
}

interface StateType {
  comments: CommentType[];
  loadCommentsLoading: boolean;
  loadCommentsDone: boolean;
  loadCommentsError: Error | null;
  createCommentAdding: boolean;
  createCommentDone: boolean;
  createCommentError: Error | null;
  deleteCommentDeleting: boolean;
  deleteCommentDone: boolean;
  deleteCommentError: Error | null;
  updateCommentUpdating: boolean;
  updateCommentDone: boolean;
  updateCommentError: Error | null;
}

export type { CommentType, CommentRequestType, StateType };
