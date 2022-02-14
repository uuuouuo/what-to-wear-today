interface FeedType {
  no: string;
  userId: string;
  nickname: string;
  profileImage: string;
  content: string;
  createdAt: Date;
  photoDate: Date;
  weather: string;
  privateMode: boolean;
  images: string[];
  tags: string[];
}
interface FeedRequestType {
  userId: string;
  content: string;
  region: string;
  weather: string;
  photoDate: string;
  privateMode: boolean;
  deleteMode: boolean;
  images: string[];
  tags: string[];
}
interface StateType {
  feed: FeedType;
  loadFeedLoading: boolean;
  loadFeedDone: boolean;
  loadFeedError: Error | null;
}

export type { FeedType, FeedRequestType, StateType };
