interface CommentType {
  _no: number;
  userId: string;
  content: string;
  createdAt: Date;
  feedNo: number;
  parent: number;
}

export type { CommentType };
