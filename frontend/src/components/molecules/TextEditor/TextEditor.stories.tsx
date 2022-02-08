import React from 'react';

import { useChange } from '@/hooks';
import TextEditor from './TextEditor';

export default {
  title: 'Molecules/TextEditor',
  component: TextEditor,
};

export const Default = () => {
  const [value, , onChange] = useChange('');
  return <TextEditor value={value} onChange={onChange} />;
};
