import React, { FunctionComponent } from 'react';
import NextImage from 'next/image';

interface Props {
  className?: string;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

const Image: FunctionComponent<Props> = ({
  className,
  src,
  width = 100,
  height = 100,
  alt = '',
}) => {
  return <NextImage className={className} src={src} width={width} height={height} alt={alt} />;
};

export default Image;
