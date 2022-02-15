import React, { FunctionComponent, useState, useRef } from 'react';
import Styled from './TextEditor.styled';
// @ts-ignore
import InputTrigger from 'react-input-trigger';

import { Text } from '@/components/atoms';
import { TagList } from '@/components/molecules';
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
  const ref = useRef(null);

  const [currentSelection, setCurrentSelection] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [tag, setTag] = useChange('');
  const [display, , openDisplay, closeDisplay] = useDisplay(false);

  const onStart = (meta: any) => {
    openDisplay();
    setTop(meta.cursor.top + meta.cursor.height);
    setLeft(meta.cursor.left);
  };

  const onCancel = (meta: any) => {
    closeDisplay();
    setTop(0);
    setLeft(0);
  };

  const onType = (meta: any) => {
    setTag(meta.text);
  };

  const onScroll = (e: React.UIEvent) => {
    if (ref.current) ref.current.scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
  };

  return (
    <Styled.Container className={className}>
      <InputTrigger
        style={{ height: '100%' }}
        trigger={{
          keyCode: 51,
          shiftKey: true,
        }}
        onStart={onStart}
        onCancel={onCancel}
        onType={onType}
      >
        <Styled.TextEditor value={value} onChange={onChange} onScroll={onScroll} />
      </InputTrigger>
      <TagList
        display={display}
        position={{ top, left }}
        list={tags}
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
        tag={tag}
      />
    </Styled.Container>
  );
};

export default TextEditor;
