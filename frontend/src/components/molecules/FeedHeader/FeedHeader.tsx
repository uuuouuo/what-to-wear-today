import React, { FunctionComponent } from 'react';
import Styled from './FeedHeader.styled';
import { UserProfileWithInfo, Weather } from '@/components/molecules';

interface Props {
  className?: string;
  user: UserType;
  createdAt: Date;
  weather: string;
  temperature: number;
}

const FeedHeader: FunctionComponent<Props> = ({
  className,
  user,
  createdAt,
  weather,
  temperature,
}) => {
  return (
    <Styled.FeedHeader className={className}>
      <UserProfileWithInfo user={user} createdAt={createdAt} />
      <Weather weather={weather} temperature={temperature} />
    </Styled.FeedHeader>
  );
};

export default FeedHeader;
