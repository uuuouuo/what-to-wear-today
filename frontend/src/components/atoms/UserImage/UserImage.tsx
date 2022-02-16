import React, { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';
import Router from 'next/router';

interface Props {
  className?: string;
  src?: string;
}

const UserImage: FunctionComponent<Props> = ({
  className,
  src = '/images/icon/blank_user.png',
}) => {
  return <Avatar className={className} src={src} />;
};

export default UserImage;
