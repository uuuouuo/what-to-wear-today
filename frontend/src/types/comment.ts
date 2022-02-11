import { UserProfileType } from './user';

interface CommentType {
  no: number;
  user: UserProfileType;
  content: string;
  createdAt: Date;
  feedNo: number;
  parent?: number;
}

interface StateType {
  comments: CommentType[];
  loadCommentsLoading: boolean;
  loadCommentsDone: boolean;
  loadCommentsError: Error | null;
}

export type { CommentType, StateType };
