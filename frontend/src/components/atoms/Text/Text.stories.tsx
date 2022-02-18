import React from 'react';
// @ts-ignore
import { text } from '@storybook/addon-knobs';

import Text from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
};

export const Default = () => {
  const value = text('value', '하윙');
  return <Text value={value} />;
};
