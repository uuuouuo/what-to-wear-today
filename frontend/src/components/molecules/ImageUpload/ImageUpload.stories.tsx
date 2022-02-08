import React from 'react';
import Avatar from '@mui/material/Avatar';

import { useFileChange } from '@/hooks';

import ImageUpload from './ImageUpload';

export default {
  title: 'Molecules/ImageUpload',
  component: ImageUpload,
};

export const Default = () => {
  const [, , onchange] = useFileChange(null);
  return (
    <ImageUpload onChange={onchange}>
      <Avatar src="/images/icon/blank_user.png" sx={{ width: 100, height: 100 }} />
    </ImageUpload>
  );
};
