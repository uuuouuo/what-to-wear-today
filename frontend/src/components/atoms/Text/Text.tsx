import React, { FunctionComponent } from 'react';
import Styled from './Text.styled';

interface Props {
  className?: string;
  value: string;
  color?: string;
  size?: string;
  weight?: number | string;
}

const Text: FunctionComponent<Props> = ({
  className,
  value,
  color = 'inherit',
  size = 'inherit',
  weight = 'inherit',
}) => {
  return (
    <Styled.Text className={className} color={color} theme={{ fontSize: size, fontWeight: weight }}>
      {value}
    </Styled.Text>
  );
};

export default Text;
