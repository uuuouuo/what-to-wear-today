import React from 'react';
import { text } from '@storybook/addon-knobs';

import Button from './Button';
import Text from '@/components/atoms/Text/Text';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Default = () => {
  const child = text('value', '데헷,,,');
  return (
    <Button type="button">
      <Text value={child} />
    </Button>
  );
};
