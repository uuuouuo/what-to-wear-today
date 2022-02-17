interface FeedsType {
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
interface FeedsRequestType {
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
  searchedFeeds: FeedsType[];
  loadSearchedFeedsLoading: boolean;
  loadSearchedFeedsDone: boolean;
  loadSearchedFeedsError: Error | null;
}

export type { FeedsType, FeedsRequestType, StateType };
