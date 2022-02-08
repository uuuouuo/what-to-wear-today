import React, { FunctionComponent } from 'react';
import Styled from './Image.styled';

interface Props {
  className?: string;
  src: string;
}

const Image: FunctionComponent<Props> = ({ className, src }) => {
  return <Styled.Image className={className} src={src} />;
};

export default Image;
