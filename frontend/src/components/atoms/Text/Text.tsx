import React, { FunctionComponent } from 'react';
import Styled from './Text.styled';

interface Props {
  className?: string;
  value: string;
  color?: string;
  size?: string;
  weight?: number;
}

const Text: FunctionComponent<Props> = ({
  className,
  value,
  color = 'inherit',
  size = '1rem',
  weight = 400,
}) => {
  return (
    <Styled.Text className={className} color={color} theme={{ fontSize: size, fontWeight: weight }}>
      {value}
    </Styled.Text>
  );
};

export default Text;
