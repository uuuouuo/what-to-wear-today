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
  myComments: CommentType[];
  loadMyCommentsLoading: boolean;
  loadMyCommentsDone: boolean;
  loadMyCommentsError: Error | null;
}
export type { CommentType, CommentRequestType, StateType };
