import React, { FunctionComponent, useState } from 'react';
import Styled from './TextEditor.styled';

import { useDisplay, useChange } from '@/hooks';

interface Props {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const tags = [
  {
    no: 1,
    tagName: 'Charmander',
  },
  { no: 2, tagName: 'Squirtle' },
  { no: 3, tagName: 'Bulbasaur' },
  { no: 4, tagName: 'Pikachu' },
];

const TextEditor: FunctionComponent<Props> = ({ className, value, onChange }) => {
  return (
    <Styled.Container className={className}>
      <Styled.TextEditor value={value} onChange={onChange} />
    </Styled.Container>
  );
};

export default TextEditor;
