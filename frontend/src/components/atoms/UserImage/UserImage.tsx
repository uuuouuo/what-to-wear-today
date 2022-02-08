import React, { FunctionComponent } from 'react';
import Avatar from '@mui/material/Avatar';

interface Props {
  userId: number;
  className?: string;
}

const UserImage: FunctionComponent<Props> = ({ userId, className }) => {
  return <Avatar alt="dobby" src={'/images/profileIMG/sample.jpg'} />;
};

export default UserImage;
