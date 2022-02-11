import React, { FunctionComponent } from 'react';
import Styled from './FooterContainer.styled';

interface Props {
  className?: string;
  children: React.ReactChild | React.ReactChild[];
}

const FileInput: FunctionComponent<Props> = ({ className, children }) => {
  return <Styled.FooterContainer className={className}>{children}</Styled.FooterContainer>;
};

export default FileInput;
