import React, { FunctionComponent } from 'react';
import Styled from './Label.styled';

interface Props {
  className?: string;
  children: React.ReactChild | React.ReactChild[];
  color?: string;
}

const Label: FunctionComponent<Props> = ({ className, children }) => {
  return <Styled.Label className={className}>{children}</Styled.Label>;
};

export default Label;
