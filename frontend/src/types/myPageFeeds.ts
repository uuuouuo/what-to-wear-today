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
  loadMyFeedsLoading: boolean;
  loadMyFeedsDone: boolean;
  loadMyFeedsError: Error | null;
}

export type { FeedType, StateType };
