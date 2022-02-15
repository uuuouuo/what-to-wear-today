import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import Styled from './styled';
import { Button, Text } from '@/components/atoms';
import { FooterNavbar, Title, TabMenu, FollowingModal } from '@/components/molecules';
import { MypageFeeds, MypageComments } from '@/components/organisms';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
  userId: string;
}

const UserTemplate: NextPage<Props> = ({ userId }) => {
  const classes = Styled.useStyles();
  const [value, setValue] = React.useState(0);

  const modifyProfile = () => {
    console.log(userId);
    console.log(typeof userId);
  };

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
            {userId === 'jdb1' ? (
              <Styled.Button className="btn setting" onClick={modifyProfile}>
                <SettingsIcon />
              </Styled.Button>
            ) : (
              <Styled.Button className="btn follow" onClick={modifyProfile}>
                <Text value="Follow" />
              </Styled.Button>
            )}
          </Styled.UserInfoHeader>

          <div>
            <Text color="#777" value="얼죽아" />
          </div>
          <Styled.UserInfoFooter>
            <FollowingModal title="팔로워" />
            <FollowingModal title="팔로잉" />
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
            {userId !== undefined ? <MypageFeeds userId={userId} /> : null}
          </Styled.TabPanel>
          <Styled.TabPanel
            role="tabpanel"
            hidden={value !== 1}
            id="simple-tabpanel-1"
            aria-labelledby="simple-tab-1"
          >
            {userId !== undefined ? <MypageComments userId={userId} /> : null}
          </Styled.TabPanel>
        </Styled.ContentContainer>
      </Styled.ProfileContainer>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default UserTemplate;
