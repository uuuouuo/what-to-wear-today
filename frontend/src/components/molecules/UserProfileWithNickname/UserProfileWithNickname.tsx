import React, { FunctionComponent } from 'react';
import Styled from './UserProfileWithNickname.styled';
import { Text } from '@/components/atoms';
import { UserProfile } from '@/components/molecules';
import { UserProfileType } from '@/types/user';

interface Props {
  className?: string;
  user: UserProfileType;
}

const UserProfileWithNickname: FunctionComponent<Props> = ({ className, user }) => {
  return (
    <Styled.Container>
      <UserProfile user={user} />
      <a href={`/user/${user.userId}`}>
        <Text value={user.nickName} />
      </a>
    </Styled.Container>
  );
};

export default UserProfileWithNickname;
