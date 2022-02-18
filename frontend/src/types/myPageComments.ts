interface MyCommentType {
  no: number;
  nickname: string;
  feedNo: number;
  parent: number | null;
  content: string;
  date: Date;
}
interface MyCommentRequestType {
  userId: string;
  parent: number;
  content: string;
  privateMode: boolean;
  deleteMode: boolean;
}
interface StateType {
  myComments: MyCommentType[];
  loadMyCommentsLoading: boolean;
  loadMyCommentsDone: boolean;
  loadMyCommentsError: Error | null;
}
export type { MyCommentType, MyCommentRequestType, StateType };
