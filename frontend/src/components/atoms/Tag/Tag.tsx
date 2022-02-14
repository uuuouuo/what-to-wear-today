import React, { FunctionComponent } from 'react';
import Styled from './Tag.styled';

interface Props {
  className?: string;
  value: number | string;
}

const Tag: FunctionComponent<Props> = ({ className, value }) => {
  return <Styled.Tag className={className}>{value}</Styled.Tag>;
};

export default Tag;
