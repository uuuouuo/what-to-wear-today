import React from 'react';

// material UI icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

//atom
import Button from 'components/atoms/Button/Button';

import Styled from '../styles/Feed_Content.styled';

const Feed_article = () => {
  const Follow = () => {
    console.log('follow!');
  };

  return (
    <Styled.Feed_Content>
      <Styled.Feed_Content_Top>
        <div>사진</div>
        <div>
          <div>
            <Styled.Feed_Content_User>
              <div>유저네임</div>
              <div>아이디</div>
              <div>게시글 올린시간(ago)</div>
            </Styled.Feed_Content_User>
            <div>게시글 내용</div>
            <div>해시태그</div>
          </div>
        </div>
        <div>
          {/* 팔로우 버튼 */}
          <Button children={<p>Follow</p>} onClick={Follow}></Button>
        </div>
      </Styled.Feed_Content_Top>
      <Styled.Feed_Content_Bottom>
        <ChatBubbleOutlineIcon />
        <FavoriteBorderIcon />
      </Styled.Feed_Content_Bottom>
    </Styled.Feed_Content>
  );
};

export default Feed_article;
