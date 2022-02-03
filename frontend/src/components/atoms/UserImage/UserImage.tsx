import React, { FunctionComponent } from 'react';

interface Props {
  userId: number;
  className?: string;
}

const UserImage: FunctionComponent<Props> = ({ userId, className }) => {
  return (
    <div>
      {/* {userId.Img} */}
      사진
    </div>
  );
};

export default UserImage;
