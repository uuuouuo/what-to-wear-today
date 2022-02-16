interface MyFeedType {
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
  myFeeds: MyFeedType[];
  loadMyFeedsLoading: boolean;
  loadMyFeedsDone: boolean;
  loadMyFeedsError: Error | null;
}
export type { MyFeedType, StateType };
