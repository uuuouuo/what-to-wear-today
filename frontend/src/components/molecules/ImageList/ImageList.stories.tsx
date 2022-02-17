import React from 'react';

import ImageList from './ImageList';
import { useFileChange } from '@/hooks';

export default {
  title: 'Molecules/ImageList',
  component: ImageList,
};

export const Default = () => {
  const [files, , , appendFile, removeFile] = useFileChange(null);
  return <ImageList files={files} appendFile={appendFile} removeFile={removeFile} />;
};
