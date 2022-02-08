import React, { FunctionComponent } from 'react';
import Styled from './Header.styled';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import Router from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import { Button } from '@/components/atoms';

interface Props {
  leftSide?: string;
  name: string;
  rightSide?: string;
}

const action = () => {
  console.log('action에 넣을 함수');
};

const Header: FunctionComponent<Props> = ({ leftSide, name, rightSide }) => {
  let r_value = null;
  let r_icon = null;
  if (rightSide === 'notification') {
    r_value = '/notification';
    r_icon = <NotificationsIcon />;
  } else if (rightSide === 'complete') {
    r_value = '/';
    r_icon = <Button children="완료" type="submit" onClick={action} />;
  } else {
    r_value = '/';
    r_icon = <></>;
  }

  let l_type = null;
  if (leftSide === 'logo') {
    l_type = <Image src={'/images/icon/Logo.png'} width={20} height={20} alt="Logo" />;
  } else if (leftSide === 'pointer') {
    l_type = (
      <Button
        type="button"
        bgColor="transparent"
        children={<ArrowBackIcon />}
        onClick={(e) => {
          Router.back();
        }}
      />
    );
  } else {
    <></>;
  }

  return (
    <Styled.Header>
      <Styled.LeftSide>{l_type}</Styled.LeftSide>

      <Styled.Center level={1} children={name} />

      <Styled.RightSide>
        <Link href={r_value}>{r_icon}</Link>
      </Styled.RightSide>
    </Styled.Header>
  );
};

export default Header;
