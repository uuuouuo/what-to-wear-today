import React, { FunctionComponent } from 'react';
import Styled from './TagList.styled';
import { TagType } from '@/types/tag';

interface Props {
  className?: string;
  display: boolean;
  position: {
    top: number;
    left: number;
  };
  list: TagType[];
  currentSelection: number;
  setCurrentSelection: React.Dispatch<React.SetStateAction<number>>;
  tag: string;
}

const TagList: FunctionComponent<Props> = ({
  className,
  display,
  position,
  list,
  currentSelection,
  setCurrentSelection,
  tag,
}) => {
  const TAGS = list.length;
  const keyHandler = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (display) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setCurrentSelection((currentSelection + 1) % TAGS);
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (currentSelection === 0) setCurrentSelection(TAGS - 1);
          else setCurrentSelection(currentSelection - 1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Styled.TagList
      className={`${className} ${display ? 'show' : ''}`}
      theme={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      onKeyDown={keyHandler}
    >
      {list
        .filter(
          (item) =>
            item.tagName && tag && item.tagName.toLowerCase().indexOf(tag.toLowerCase()) !== -1,
        )
        .map((item, idx) => (
          <Styled.Item key={item.no} className={idx === currentSelection ? 'select' : ''}>
            {item.tagName}
          </Styled.Item>
        ))}
    </Styled.TagList>
  );
};

export default TagList;
