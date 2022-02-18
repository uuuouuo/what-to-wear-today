import React, { FunctionComponent } from 'react';
import Styled from './Header.styled';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import Router from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Text, Image } from '@/components/atoms';

interface Props {
  leftSide?: string;
  name: string;
  rightSide?: string;
}

const Header: FunctionComponent<Props> = ({ leftSide, name, rightSide }) => {
  let rIcon = null;
  if (rightSide === 'notification') {
    rIcon = (
      <Styled.RightSide>
        <Link href="/notification">
          <NotificationsIcon />
        </Link>
      </Styled.RightSide>
    );
  } else rIcon = <div />;

  const moveBack = (e: React.MouseEvent) => {
    Router.back();
  };
  let lType = null;
  if (leftSide === 'logo') {
    lType = <Image src="/images/icon/Logo.png" width={20} height={20} alt="Logo" />;
  } else if (leftSide === 'pointer') {
    lType = (
      <Button type="button" bgColor="transparent" onClick={moveBack}>
        <ArrowBackIcon />
      </Button>
    );
  }

  return (
    <Styled.Header>
      <Styled.LeftSide>{lType}</Styled.LeftSide>

      <Styled.Heading level={1}>
        <Text value={name} />
      </Styled.Heading>

      {rIcon}
    </Styled.Header>
  );
};

export default Header;
