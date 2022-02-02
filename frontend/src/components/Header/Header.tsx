import React, { FunctionComponent } from 'react';

import Styled from './Header.styled';

import NotificationsIcon from '@mui/icons-material/Notifications';

import Link from 'next/link';

import Router from 'next/router';

import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

interface Props {
  leftSide?: string;
  name: string;
  rightSide?: string;
}

const Header: FunctionComponent<Props> = ({ leftSide, name, rightSide }) => {
  let r_value = null;
  let r_icon = null;
  if (rightSide === 'notification') {
    r_value = '/notification';
    r_icon = <NotificationsIcon />;
  } else if (rightSide === 'complete') {
    r_value = '/';
    r_icon = <Button children="완료" />;
  } else {
    r_value = '/';
    r_icon = <></>;
  }

  let l_type = null;
  if (leftSide === 'logo') {
    l_type = <p>로고</p>;
  } else if (leftSide === 'pointer') {
    l_type = (
      <Button
        type="button"
        onClick={(e) => {
          Router.back();
        }}
      >
        화살표
      </Button>
    );
  } else {
    <></>;
  }

  return (
    <Styled.Header>
      <div>{l_type}</div>

      <Heading level={1} value={name} />

      <div>
        <Link href={r_value}>{r_icon}</Link>
      </div>
    </Styled.Header>
  );
};

export default Header;
