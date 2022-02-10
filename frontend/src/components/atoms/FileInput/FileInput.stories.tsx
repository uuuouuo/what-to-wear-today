import React from 'react';

import FileInput from './FileInput';
import { useFileChange } from '@/hooks';

export default {
  title: 'Atoms/FileInput',
  component: FileInput,
};

export const Default = () => {
  const [file, , onchangeValue] = useFileChange(null);
  return <FileInput onChange={onchangeValue} />;
};
