import React from 'react';

import ImageList from './ImageList';
import { useFileChange } from '@/hooks';

export default {
  title: 'Molecules/ImageList',
  component: ImageList,
};

export const Default = () => {
  const [file, setFile] = useFileChange(null);
  const [files, , , appendFile] = useFileChange(null);
  return <ImageList selectFile={file} setFile={setFile} files={files} appendFile={appendFile} />;
};
