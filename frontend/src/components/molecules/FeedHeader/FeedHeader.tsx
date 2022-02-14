import React, { FunctionComponent } from 'react';
import Styled from './FeedHeader.styled';
import { UserProfileWithInfo, Weather } from '@/components/molecules';
import { UserProfileType } from '@/types/user';

interface Props {
  className?: string;
  user: UserProfileType;
  createdAt: Date;
  weather: string;
}

const FeedHeader: FunctionComponent<Props> = ({ className, user, createdAt, weather }) => {
  return (
    <Styled.FeedHeader className={className}>
      <UserProfileWithInfo user={user} createdAt={createdAt} />
      <Weather weather={weather} temperature={-3} />
    </Styled.FeedHeader>
  );
};

export default FeedHeader;
