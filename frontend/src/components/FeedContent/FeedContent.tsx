import React, { useRef, useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import Styled from './FeedContent.styled';
import ArticleImage from '@/components/ArticleImage/ArticleImage';

import {
  Button,
  UserImage,
  UserName,
  UserId,
  HashTag,
  ArticleContent,
  ArticleDate,
} from '../atoms';

const Feed_article = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const target = useRef<HTMLDivElement>(null);

  const loadItems = () => {
    setData((prevState) => {
      const articles = [
        { id: 11, name: '홍', like: 12 },
        { id: 12, name: 'ㅂ', like: 10 },
        { id: 13, name: 'ㅈ', like: 10 },
        { id: 14, name: 'ㄷ', like: 10 },
        { id: 15, name: 'ㄱ', like: 10 },
        { id: 16, name: 'ㅅ', like: 10 },
        { id: 17, name: 'ㅛ', like: 10 },
        { id: 18, name: 'ㅕ', like: 10 },
        { id: 19, name: 'ㅑ', like: 10 },
        { id: 20, name: 'ㅐ', like: 10 },
        { id: 21, name: 'ㅔ', like: 10 },
        { id: 22, name: '짱', like: 14 },
        { id: 23, name: 'ㄴ', like: 10 },
        { id: 24, name: 'ㅇ', like: 10 },
        { id: 25, name: 'ㄹ', like: 10 },
        { id: 26, name: 'ㅎ', like: 10 },
        { id: 27, name: 'ㅗ', like: 10 },
        { id: 28, name: 'ㅓ', like: 10 },
        { id: 29, name: 'ㅏ', like: 10 },
        { id: 30, name: 'ㅣ', like: 10 },
        { id: 31, name: ';', like: 10 },
        { id: 32, name: 'ㅋ', like: 10 },
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
    { id: 0, name: '김이박', like: 0 },
    { id: 1, name: '김', like: 0 },
    { id: 2, name: '이', like: 0 },
    { id: 3, name: '박', like: 0 },
    { id: 4, name: '황', like: 0 },
    { id: 5, name: '정', like: 0 },
    { id: 6, name: '한', like: 0 },
    { id: 7, name: '길', like: 0 },
    { id: 8, name: '선우', like: 0 },
    { id: 9, name: '독고', like: 0 },
  ]);

  //////////////////////////////////////

  const follow = () => {
    console.log('follow!');
  };

  return (
    <Styled.Feed_content_box ref={scrollAreaRef}>
      {datas.map((article, idx) => {
        const lastEl = idx === datas.length - 1;
        return (
          <Styled.Feed_content key={idx} ref={lastEl ? target : null}>
            <Styled.Feed_content_top>
              <UserImage userId={article.id} />

              <Styled.Feed_content_user>
                <UserName value={article.name} />
                <UserId value={article.name} />
              </Styled.Feed_content_user>
            </Styled.Feed_content_top>

            <ArticleImage />

            <Styled.Feed_ArticleArea>
              <ArticleContent value={article.name} />
              <HashTag value={['dd', 'ss', 'aa']} />
              <ArticleDate value={article.name} />
            </Styled.Feed_ArticleArea>

            <Styled.Feed_content_bottom>
              <Button children={<ChatBubbleOutlineIcon />} onClick={follow} bgColor="transparent" />
              <Button children={<FavoriteBorderIcon />} onClick={follow} bgColor="transparent" />
            </Styled.Feed_content_bottom>
          </Styled.Feed_content>
        );
      })}
    </Styled.Feed_content_box>
  );
};

export default Feed_article;
