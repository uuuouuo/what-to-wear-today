import React, { FunctionComponent } from 'react';
import Styled from './Label.styled';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  color?: string;
}

const Label: FunctionComponent<Props> = ({ children }) => {
  return <Styled.Label>{children}</Styled.Label>;
};

export default Label;
