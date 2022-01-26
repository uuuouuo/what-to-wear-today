import React, { FunctionComponent } from 'react';
import Styled from './Button.styled';

interface Props {
  chilren: React.ReactChild;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FunctionComponent<Props> = ({
  children,
  className,
  type = 'button',
  onClick,
  disabled = false,
}) => {
  return (
    <Styled.Button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
