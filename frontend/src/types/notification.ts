import { CommentType } from './comment';
import { FeedType } from './feed';
import { UserProfileType } from './user';

interface NotificationType {
  no: number;
  sender: UserProfileType;
  comment?: CommentType;
  feed?: FeedType;
}

export type { NotificationType };
