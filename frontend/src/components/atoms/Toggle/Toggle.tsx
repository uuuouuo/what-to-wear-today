import React, { FunctionComponent, useEffect } from 'react';
import Styled from './Toggle.styled';

interface Props {
  className?: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle: FunctionComponent<Props> = ({ className, value, setValue }) => {
  const onClick = (e: React.MouseEvent) => {
    setValue(!value);
  };
  return (
    <Styled.Toggle
      data-toggle="button"
      className={`${className} ${value ? 'active' : ''}`}
      onClick={onClick}
    >
      <Styled.Handle className={value ? 'active' : ''} />
    </Styled.Toggle>
  );
};

export default Toggle;
