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

export type { FeedType, StateType };
