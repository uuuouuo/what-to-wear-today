import React from 'react';

// material UI icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

//atom
import Button from '../atoms/Button/Button';

import Styled from './Feed_content.styled';

const Feed_article = () => {
  const Follow = () => {
    console.log('follow!');
  };

  return (
    <Styled.Feed_content>
      <Styled.Feed_content_top>
        <div>사진</div>
        <div>
          <div>
            <Styled.Feed_content_user>
              <div>유저네임</div>
              <div>아이디</div>
              <div>게시글 올린시간(ago)</div>
            </Styled.Feed_content_user>
            <div>게시글 내용</div>
            <div>해시태그</div>
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
  );
};

export default Feed_article;
