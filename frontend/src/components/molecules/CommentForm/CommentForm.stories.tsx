import React from 'react';
import { useChange } from '@/hooks';

import CommentForm from './CommentForm';

export default {
  title: 'Molecules/CommentForm',
  component: CommentForm,
};

export const Default = () => {
  const [value, , onChange] = useChange('');
  const onClick = (e: React.MouseEvent) => {
    console.log('click');
  };

  return <CommentForm value={value} onChange={onChange} onClick={onClick} />;
};
