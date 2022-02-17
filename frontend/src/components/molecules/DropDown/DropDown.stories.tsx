import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';

import DropDown from './DropDown';

export default {
  title: 'Molecules/DropDown',
  component: DropDown,
};

export const Default = () => {
  const display = boolean('display', false);
  const position = { top: 0, left: 0 };
  const list = ['Charmander', 'Squirtle', 'Bulbasaur', 'Pikachu'];
  const currentSelection = number('currentSelection', 0);

  return (
    <DropDown
      display={display}
      position={position}
      list={list}
      currentSelection={currentSelection}
    />
  );
};
