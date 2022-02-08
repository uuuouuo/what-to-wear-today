import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { Text } from '@/components/atoms';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Default = () => {
  const level = select('level', [1, 2, 3, 4, 5, 6], 1, 'GROUP_ID2');
  const value = text('value', '안농');
  return (
    <Heading level={level} color="#777">
      <Text value={value} />
    </Heading>
  );
};
