import React, { FunctionComponent, useState } from 'react';
import Router from 'next/router';
import Styled from './FeedHeader.styled';
import { UserProfileWithInfo, Weather } from '@/components/molecules';
import { UserProfileType } from '@/types/user';
import makeTimeString from '@/libs/makeTimeString';
import { Button, Text } from '@/components/atoms';
import { deleteFeedRequest } from '@/action/feedAction';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDisplay } from '@/hooks';

interface Props {
  className?: string;
  user: UserProfileType;
  createdAt: Date;
  weather: string;
  feedNo: number;
}

const FeedHeader: FunctionComponent<Props> = ({ className, user, createdAt, weather, feedNo }) => {
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(true);
  const [isDetail, setIsDetail] = useState(true);
  const viewUDBtn = isDetail && isUser;
  const [display, setDisplay] = useDisplay(false);

  const toggleDisplay = (e: React.MouseEvent) => {
    setDisplay(!display);
  };

  const deleteFeedAction = (e: React.MouseEvent) => {
    dispatch(deleteFeedRequest(feedNo));
    Router.push('/');
  };

  return (
    <Styled.FeedHeader className={className}>
      <UserProfileWithInfo user={user} sub={makeTimeString(createdAt)} />
      <Styled.Container>
        <Weather weather={weather} />
        {viewUDBtn ? (
          <>
            <Styled.MoreButtonContainer>
              <Button onClick={toggleDisplay}>
                <MoreVertIcon />
              </Button>
              {display ? (
                <Styled.MoreContent>
                  <Button
                    bgColor="#000"
                    onClick={(e: React.MouseEvent) => {
                      Router.push(`/feed/feedUpdate/${feedNo}`);
                    }}
                  >
                    <Text color="#fff" value="수정" />
                  </Button>
                  <Button bgColor="#fe7b45" onClick={deleteFeedAction}>
                    <Text color="#fff" value="삭제" />
                  </Button>
                </Styled.MoreContent>
              ) : (
                <></>
              )}
            </Styled.MoreButtonContainer>
          </>
        ) : (
          <></>
        )}
      </Styled.Container>
    </Styled.FeedHeader>
  );
};

export default FeedHeader;
