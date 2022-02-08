import React, { FunctionComponent } from 'react';
import Styled from './Title.styled';
import { Heading } from '@/components/atoms';

interface Props {
  className?: string;
  color?: string;
  value: string;
}

const Title: FunctionComponent<Props> = ({ className, value, color = '#fff' }) => {
  return (
    <Heading level={1} className={className}>
      <Styled.Text value={value} color={color} size="1.5rem" />
    </Heading>
  );
};

export default Title;
