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
  CommentAdding: boolean;
  createCommentDone: boolean;
  createCommentError: Error | null;
}

export type { CommentType, StateType };
