import React, { useEffect, useState, useRef } from 'react';
import { SwipeableList, SwipeableListItem } from 'react-swipeable-list';
import { UserImage, Button } from '@/components/atoms';

import Styled from './NotificationContent.styled';

const NotificationContent = () => {
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
        { id: 22, name: '짱' },
        { id: 23, name: 'ㄴ' },
        { id: 24, name: 'ㅇ' },
        { id: 25, name: 'ㄹ' },
        { id: 26, name: 'ㅎ' },
        { id: 27, name: 'ㅗ' },
        { id: 28, name: 'ㅓ' },
        { id: 29, name: 'ㅏ' },
        { id: 30, name: 'ㅣ' },
        { id: 31, name: 'ㅔ' },
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

  const follow = () => {
    console.log('follow!');
  };

  const removeItem = (id: number) => {
    setData(datas.filter((value, index) => value.id !== id));
  };

  //grahams.tistory.com/193 [MakeDesire]

  출처: https: return (
    <Styled.NotificationContainer ref={scrollAreaRef}>
      <SwipeableList>
        {datas.map((notifi, idx) => {
          const lastEl = idx === datas.length - 1;
          return (
            <SwipeableListItem
              key={notifi.id}
              swipeLeft={{
                content: (
                  <div style={{ width: '100%', height: '100%', verticalAlign: 'middle' }}></div>
                ),
                action: () => {
                  removeItem(notifi.id);
                },
              }}
            >
              <Styled.Notification key={idx} ref={lastEl ? target : null}>
                <Styled.UserImageContainer>
                  <UserImage userId={1} />
                </Styled.UserImageContainer>
                <Styled.ContentContainer>
                  <div>~~님이 ~~게시글에 댓글을 작성했습니다.</div>
                  <div>안녕 안녕 안녕하세요 안녕안녕 안녕하세요 ...</div>
                </Styled.ContentContainer>
                <Button onClick={follow} children="follow" />
              </Styled.Notification>
            </SwipeableListItem>
          );
        })}
      </SwipeableList>
    </Styled.NotificationContainer>
  );
};

export default NotificationContent;
