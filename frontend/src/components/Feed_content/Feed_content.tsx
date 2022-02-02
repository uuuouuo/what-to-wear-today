import React, { useRef, useState, useEffect } from 'react';

// material UI icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

//style
import Styled from './Feed_content.styled';

//atom
import Button from '../atoms/Button/Button';

const Feed_article = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const target = useRef<HTMLDivElement>(null);

  const loadItems = () => {
    setData((prevState) => {
      const articles = [
        { id: 11, name: '홍' },
        { id: 12, name: 'ㅂ' },
        { id: 13, name: 'ㅈ' },
        { id: 14, name: 'ㄷ' },
        { id: 15, name: 'ㄱ' },
        { id: 16, name: 'ㅅ' },
        { id: 17, name: 'ㅛ' },
        { id: 18, name: 'ㅕ' },
        { id: 19, name: 'ㅑ' },
        { id: 20, name: 'ㅐ' },
        { id: 21, name: 'ㅔ' },
        { id: 22, name: 'ㅁ' },
        { id: 23, name: 'ㄴ' },
        { id: 24, name: 'ㅇ' },
        { id: 25, name: 'ㄹ' },
        { id: 26, name: 'ㅎ' },
        { id: 27, name: 'ㅗ' },
        { id: 28, name: 'ㅓ' },
        { id: 29, name: 'ㅏ' },
        { id: 30, name: 'ㅣ' },
        { id: 31, name: ';' },
        { id: 32, name: 'ㅋ' },
      ];
      const id = prevState[prevState.length - 1].id;
      const articleId = articles.map((article, index) => {
        return { ...article, id: id + index + 1 };
      });
      return [...prevState, ...articleId];
    });
  };

  useEffect(() => {
    const options = {
      root: scrollAreaRef.current,
      threshold: 0.4,
    };

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        loadItems();
        observer.unobserve(entry.target);
        observer.observe(target.current);
      });
    };

    const io = new IntersectionObserver(onIntersect, options);

    if (target.current) {
      io.observe(target.current);
    }

    return () => io && io.disconnect();
  }, [target, scrollAreaRef]);

  const [datas, setData] = useState([
    { id: 0, name: '김이박' },
    { id: 1, name: '김' },
    { id: 2, name: '이' },
    { id: 3, name: '박' },
    { id: 4, name: '황' },
    { id: 5, name: '정' },
    { id: 6, name: '한' },
    { id: 7, name: '길' },
    { id: 8, name: '선우' },
    { id: 9, name: '독고' },
  ]);

  //////////////////////////////////////

  const Follow = () => {
    console.log('follow!');
  };

  return (
    <Styled.Feed_content_box ref={scrollAreaRef}>
      {datas.map((article, idx) => {
        const lastEl = idx === datas.length - 1;
        return (
          <Styled.Feed_content key={idx} ref={lastEl ? target : null}>
            <Styled.Feed_content_top>
              <div>사진{article.name}</div>
              <div>
                <div>
                  <Styled.Feed_content_user>
                    <div>유저네임{article.name}</div>
                    <div>아이디{article.name}</div>
                    <div>게시글 올린시간(ago){article.name}</div>
                  </Styled.Feed_content_user>
                  <div>게시글 내용{article.name}</div>
                  <div>해시태그{article.name}</div>
                </div>
              </div>
              <div>
                {/* 팔로우 버튼 */}
                <Button onClick={Follow}>{<p>follow</p>}</Button>
              </div>
            </Styled.Feed_content_top>
            <Styled.Feed_content_bottom>
              <ChatBubbleOutlineIcon />
              <FavoriteBorderIcon />
            </Styled.Feed_content_bottom>
          </Styled.Feed_content>
        );
      })}
    </Styled.Feed_content_box>
  );
};

export default Feed_article;
