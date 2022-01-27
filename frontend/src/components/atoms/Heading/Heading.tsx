import React, { FunctionComponent } from 'react';
import Styled from './Heading.styled';

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  value: string;
  color?: string;
}

const Heading: FunctionComponent<Props> = ({
  level,
  as: Component = `h${level}`,
  className,
  value,
  color = '#000',
}) => {
  return (
    <Styled.Heading as={Component} className={className} color={color}>
      {value}
    </Styled.Heading>
  );
};

export default Heading;
