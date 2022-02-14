import { UserProfileType } from './user';
import { PhotoType } from './photo';
import { CommentType } from './comment';

interface FeedType {
  _no: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  regionId: number;
  weather: string;
  privateMode: boolean;
  deleteMode: boolean;
  photoDate: Date;
}

interface StateType {
  feed: FeedType;
  loadFeedLoading: boolean;
  loadFeedDone: boolean;
  loadFeedError: Error | null;
}
interface FeedDetailType {
  no: number;
  user: UserProfileType;
  content: string;
  createdAt: Date;
  photoDate: Date;
  weather: string;
  privateMode: boolean;
  images?: PhotoType[];
  comments: CommentType[];
}

export type { FeedType, StateType, FeedDetailType };
