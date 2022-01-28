import React from 'react';

// material UI icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

//style
import Styled from './Feed_content.styled';

//atom
import Button from '../atoms/Button/Button';

const Feed_article = () => {
  const Follow = () => {
    console.log('follow!');
  };
  interface sampleType {
    id: number;
    name: string;
  }

  const sample: sampleType[] = [
    { id: 1, name: '김' },
    { id: 2, name: '이' },
    { id: 3, name: '박' },
    { id: 4, name: '황' },
    { id: 5, name: '정' },
    { id: 6, name: '한' },
    { id: 7, name: '길' },
    { id: 8, name: '선우' },
    { id: 9, name: '독고' },
    { id: 10, name: '홍' },
  ];

  return (
    <Styled.Feed_content_box>
      {sample.map((idx) => (
        <Styled.Feed_content>
          <Styled.Feed_content_top>
            <div>사진{idx.name}</div>
            <div>
              <div>
                <Styled.Feed_content_user>
                  <div>유저네임{idx.name}</div>
                  <div>아이디{idx.name}</div>
                  <div>게시글 올린시간(ago){idx.name}</div>
                </Styled.Feed_content_user>
                <div>게시글 내용{idx.name}</div>
                <div>해시태그{idx.name}</div>
              </div>
            </div>
            <div>
              {/* 팔로우 버튼 */}
              <Button children={<p>Follow</p>} onClick={Follow}></Button>
            </div>
          </Styled.Feed_content_top>
          <Styled.Feed_content_bottom>
            <ChatBubbleOutlineIcon />
            <FavoriteBorderIcon />
          </Styled.Feed_content_bottom>
        </Styled.Feed_content>
      ))}
    </Styled.Feed_content_box>
  );
};

export default Feed_article;
