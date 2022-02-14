import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';

import TagList from './TagList';
import { TagType } from '@/types/tag';

export default {
  title: 'Molecules/TagList',
  component: TagList,
};

export const Default = () => {
  const display = boolean('display', false);
  const position = { top: 0, left: 0 };
  const list: TagType[] = [
    {
      no: 1,
      tagName: 'Charmander',
    },
    {
      no: 2,
      tagName: 'Squirtle',
    },
    {
      no: 3,
      tagName: 'Bulbasaur',
    },
    {
      no: 4,
      tagName: 'Pikachu',
    },
  ];
  const [currentSelection, setCurrentSelection] = useState(0);
  const tag = '';

  return (
    <TagList
      display={display}
      position={position}
      list={list}
      currentSelection={currentSelection}
      setCurrentSelection={setCurrentSelection}
      tag={tag}
    />
  );
};
