import React, { FunctionComponent, useState, useRef } from 'react';
import Styled from './TextEditor.styled';
import InputTrigger from 'react-input-trigger';

import { Text } from '@/components/atoms';
import { DropDown } from '@/components/molecules';
import { useDisplay, useChange } from 'hooks';

interface Props {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

const tags = ['Charmander', 'Squirtle', 'Bulbasaur', 'Pikachu'];

const TextEditor: FunctionComponent<Props> = ({ className, value, onChange }) => {
  const ref = useRef(null);

  const [currentSelection, setCurrentSelection] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [tag, setTag] = useChange('');
  const [display, , openDisplay, closeDisplay] = useDisplay(false);

  const onStart = (meta) => {
    openDisplay();
    setTop(meta.cursor.top + meta.cursor.height);
    setLeft(meta.cursor.left);
  };

  const onCancel = (meta) => {
    closeDisplay();
    setTop(0);
    setLeft(0);
  };

  const onType = (meta) => {
    setTag(meta.text);
  };

  const onScroll = (e: React.UIEvent) => {
    if (ref.current) ref.current.scrollTop = e.target.scrollTop;
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
      <DropDown
        display={display}
        position={{ top, left }}
        list={tags}
        currentSelection={currentSelection}
      />
      <Styled.Highlights ref={ref}>
        {value ? (
          value.split(/(#[^#\s]+|\n)/g).map((v) => {
            if (v.match(/(#[^#\s]+)/)) {
              return <Text className="hashtag" value={v} />;
            } else if (v.match(/\n/)) {
              return <br />;
            } else {
              return <Text value={v} />;
            }
          })
        ) : (
          <Text value="Write something..." color="#aaa" />
        )}
        <br />
      </Styled.Highlights>
    </Styled.Container>
  );
};

export default TextEditor;
