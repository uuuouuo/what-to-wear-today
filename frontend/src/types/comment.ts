interface CommentType {
  _no: number;
  userId: string;
  content: string;
  createdAt: Date;
  feedNo: number;
  parent: number;
}

interface StateType {
  comments: CommentType[];
  loadCommentsLoading: boolean;
  loadCommentsDone: boolean;
  loadCommentsError: Error | null;
}

export type { CommentType, StateType };
