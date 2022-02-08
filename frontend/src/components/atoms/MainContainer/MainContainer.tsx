import React, { FunctionComponent } from 'react';
import Styled from './MainContainer.styled';

interface Props {
  className?: string;
  children: React.ReactChild | React.ReactChild[];
}

const MainContainer: FunctionComponent<Props> = ({ className, children }) => {
  return <Styled.MainContainer className={className}>{children}</Styled.MainContainer>;
};

export default MainContainer;
