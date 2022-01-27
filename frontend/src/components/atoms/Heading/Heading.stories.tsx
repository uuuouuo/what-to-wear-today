import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Default = () => {
  const level = select('level', [1, 2, 3, 4, 5, 6], 1, 'GROUP_ID2');
  const value = text('value', '안농');
  return <Heading level={level} value={value} color="#777" />;
};
