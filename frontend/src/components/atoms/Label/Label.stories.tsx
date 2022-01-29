import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { text } from '@storybook/addon-knobs';

import { Text } from '@/components/atoms';
import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
};

export const Default = () => {
  return (
    <Label>
      <PersonIcon />
    </Label>
  );
};

export const TextLabel = () => {
  const value = text('value', '하윙');
  return (
    <Label>
      <Text value={value} />
    </Label>
  );
};
