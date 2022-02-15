import React, { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@/components/atoms';
import { UserProfileType } from '@/types/user';
import Router from 'next/router';

interface Props {
  className?: string;
  user: UserProfileType;
}

const UserProfile: FunctionComponent<Props> = ({ className, user }) => {
  const moveProfile = (e: React.MouseEvent) => {
    Router.push(`/user/${user.userId}`);
  };
  return (
    <Button className={className} onClick={moveProfile} bgColor="transparent">
      <Avatar src={user.profileImage} />
    </Button>
  );
};

export default UserProfile;
