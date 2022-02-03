import React from 'react';
import { text } from '@storybook/addon-knobs';

import Button from './Button';
import { Text } from '@/components/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Default = () => {
  const child = text('value', '데헷,,,');
  const onClick = (e: React.MouseEvent) => {
    alert('안농');
  };

  return (
    <Button type="button" onClick={onClick}>
      <Text value={child} />
    </Button>
  );
};
