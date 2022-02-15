import React, { FunctionComponent } from 'react';
import Styled from './UserProfileWithInfo.styled';
import { Text } from '@/components/atoms';
import { UserProfile } from '@/components/molecules';
import { UserProfileType } from '@/types/user';
import Link from 'next/link';

interface Props {
  className?: string;
  user: UserProfileType;
  createdAt?: string | Date;
}

const UserProfileWithInfo: FunctionComponent<Props> = ({ className, user, createdAt }) => {
  return (
    <Styled.Container>
      <UserProfile user={user} />
      <Styled.Info>
        <Link href={`/user/${user.userId}`}>
          <Text value={user.nickname} />
        </Link>
        {createdAt ? (
          <Styled.Sub>
            <Text value={createdAt} color="#888" size="0.7rem" />
          </Styled.Sub>
        ) : (
          <></>
        )}
      </Styled.Info>
    </Styled.Container>
  );
};

export default UserProfileWithInfo;
