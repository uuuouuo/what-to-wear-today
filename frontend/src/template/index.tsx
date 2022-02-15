import React, { useEffect, useState, useRef } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';
import axios from 'axios';
import type { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_FEEDS_REQUEST } from '@/action/feedsAction';

// key값 env에 넣기
import { KAKAO_MAP_APIKEY } from '@/config';

import { Header, FeedRegion, TabMenu, FooterNavbar } from '@/components/molecules';
import { Feed } from '@/components/organisms';
import { RegionType } from 'types/region';
import { END } from 'redux-saga';

const interestRegions: RegionType[] = [
  { no: 1, regionName: 'seoul', weather: '맑음' },
  { no: 2, regionName: 'gwangju', weather: '맑음' },
  { no: 3, regionName: 'ahnyang', weather: '맑음' },
  { no: 4, regionName: 'daejeon', weather: '맑음' },
  { no: 5, regionName: 'busan', weather: '맑음' },
];

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { feeds, loadFeedsLoading, loadFeedsDone } = useSelector((state: RootState) => state.feeds);
  const [pageNum, setPageNum] = useState(2);
  const viewport = useRef(null);
  const target = useRef(null);

  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        axios({
          method: 'get',
          url: `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
          headers: {
            Authorization: `${KAKAO_MAP_APIKEY}`,
          },
        }).then((response) => console.log(response.data.documents[1].address_name));
      });
    }
  }, []);

  useEffect(() => {
    const options = {
      root: viewport.current,
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.6) {
          return;
        }

        if (!entry.isIntersecting && !loadFeedsLoading) {
          return;
        }
        if (!loadFeedsLoading) {
          dispatch({
            type: LOAD_FEEDS_REQUEST,
            regionNo: pageNum,
          });
          // 지역 값 설정 로직 작성 필요
          setPageNum(pageNum + 1);
          observer.unobserve(entry.target);
          return;
        }
      });
    };

    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(target.current);
    }

    return () => io && io.disconnect();
  }, [viewport, target, loadFeedsLoading, feeds]);

  return (
    <Styled.MainContainer>
      <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification" />

      <Styled.FeedNavbar>
        <FeedRegion interestRegions={interestRegions} />
        <TabMenu tabList={['추천순', '인기순', '좋아요순', '최신순']} />
      </Styled.FeedNavbar>
      <Styled.FeedContent ref={viewport}>
        {feeds.map((feed, idx) => {
          const lastEl = idx === feeds.length - 1;
          return (
            <div ref={lastEl ? target : null}>
              <Feed key={feed.no} feed={feed} />;
            </div>
          );
        })}
      </Styled.FeedContent>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default Home;
