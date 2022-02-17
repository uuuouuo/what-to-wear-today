import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import Styled from './styled';
import { Button, Text } from '@/components/atoms';
import { FooterNavbar, Title, TabMenu, FollowingModal } from '@/components/molecules';
import { MypageFeeds, MypageComments } from '@/components/organisms';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';

import { apiInstance, authInstance } from '@/libs/axios';

interface Props {
  userId: string;
}

const UserTemplate: NextPage<Props> = ({ userId }) => {
  const classes = Styled.useStyles();
  const [value, setValue] = React.useState(0);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [follow, setFollow] = useState(false);
  const authApi = authInstance();
  const api = apiInstance();

  const modifyProfile = () => {
    console.log('회원정보 수정');
  };

  const handleFollow = async () => {
    if (follow) {
      await authApi.delete(`/follow?userid=${1234}&followingid=${userId}`);
    } else {
      await authApi.post('/follow', { userId: '1234', followingId: userId });
    }
    setFollow(!follow);
  };

  useEffect(() => {
    api.get(`/follower/${userId}`).then((res) => {
      setFollowers(res.data);
    });
    api.get(`/following/${userId}`).then((res) => {
      setFollowings(res.data);
    });

    api.get(`/following/1234`).then((res) => {
      if (res.data.find((obj) => obj.userId === userId)) {
        setFollow(true);
      }
    });
  }, [follow]);

  return (
    <Styled.MainContainer>
      <Styled.DrawerMenu userId={userId} />
      <Title value="PROFILE" />
      <Styled.ProfileContainer>
        <Avatar
          classes={{
            root: classes.root,
          }}
          src="/images/icon/blank_user.png"
          sx={{ width: 100, height: 100 }}
        />
        <Styled.UserInfo>
          <Styled.UserInfoHeader>
            <Text className="username" size="1.3rem" weight="600" value={userId} />
            {userId === '1234' ? (
              <Styled.Button className="btn setting" onClick={modifyProfile}>
                <SettingsIcon />
              </Styled.Button>
            ) : (
              <Styled.Button className="btn follow" onClick={handleFollow}>
                {follow ? <Text value="Unfollow" /> : <Text value="Follow" />}
              </Styled.Button>
            )}
          </Styled.UserInfoHeader>

          <div>
            <Text color="#777" value="얼죽아" />
          </div>
          <Styled.UserInfoFooter>
            <FollowingModal title="팔로워" arr={followers} />
            <FollowingModal title="팔로잉" arr={followings} />
          </Styled.UserInfoFooter>
        </Styled.UserInfo>
        <Styled.TabContainer>
          <TabMenu tabList={['FEEDS', 'COMMENTS']} value={value} setValue={setValue} />
        </Styled.TabContainer>
        <Styled.ContentContainer>
          <Styled.TabPanel
            role="tabpanel"
            hidden={value !== 0}
            id="simple-tabpanel-0"
            aria-labelledby="simple-tab-0"
          >
            {userId !== undefined ? <MypageFeeds /> : null}
          </Styled.TabPanel>
          <Styled.TabPanel
            role="tabpanel"
            hidden={value !== 1}
            id="simple-tabpanel-1"
            aria-labelledby="simple-tab-1"
          >
            {userId !== undefined ? <MypageComments /> : null}
          </Styled.TabPanel>
        </Styled.ContentContainer>
      </Styled.ProfileContainer>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default UserTemplate;
