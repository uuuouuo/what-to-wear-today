import React from 'react';

import { Text, Button } from '@/components/atoms';
import FooterContainer from './FooterContainer';

export default {
  title: 'Atoms/FooterContainer',
  component: FooterContainer,
};

export const Default = () => {
  return (
    <FooterContainer>
      <Button onClick={(e: React.MouseEvent) => alert('하윙')}>
        <Text value="하윙" />
      </Button>
      <Button onClick={(e: React.MouseEvent) => alert('바윙')}>
        <Text value="바윙" />
      </Button>
    </FooterContainer>
  );
};
