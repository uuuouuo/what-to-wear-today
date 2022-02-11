import { UserProfileType } from './user';
import { PhotoType } from './photo';

interface FeedType {
  no: number;
  user: UserProfileType;
  content: string;
  createdAt: Date;
  photoDate: Date;
  weather: string;
  privateMode: boolean;
  images?: PhotoType[];
}

export type { FeedType };
