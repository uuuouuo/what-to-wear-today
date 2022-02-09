import React, { FunctionComponent, useState } from 'react';
import Styled from './DropDown.styled';
import { useDisplay } from '@/hooks';

interface Props {
  className?: string;
  display: boolean;
  position: {
    top: number;
    left: number;
  };
  list: string[];
  currentSelection: number;
}

const DropDown: FunctionComponent<Props> = ({
  className,
  display,
  position,
  list,
  currentSelection,
}) => {
  return (
    <Styled.DropDown
      className={`${className} ${display ? 'show' : ''}`}
      theme={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {list.map((item, idx) => (
        <Styled.Item className={idx === currentSelection ? 'select' : ''}>{item}</Styled.Item>
      ))}
    </Styled.DropDown>
  );
};

export default DropDown;
