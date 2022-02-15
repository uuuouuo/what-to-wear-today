import React from 'react';

import { useChange } from '@/hooks';

import Textarea from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
};

export const Default = () => {
  const [value, , onchangeValue] = useChange('');
  return <Textarea value={value} onChange={onchangeValue} />;
};
