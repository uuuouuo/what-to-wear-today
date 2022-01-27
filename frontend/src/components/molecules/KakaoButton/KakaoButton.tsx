import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Styled from './KakaoButton.styled';
import { KAKAO_CALLBACK_URL } from '@/config';

interface Props {
  className?: string;
}

const KakaoButton: FunctionComponent<Props> = ({ className }) => {
  const onClick = (e: React.MouseEvent) => {
    window.location.replace(KAKAO_CALLBACK_URL);
  };

  return (
    <Styled.Button type="button" className={className} onClick={onClick}>
      <Image src="/images/kakaoButton/kakao_login_medium_wide.png" width={300} height={45} />
    </Styled.Button>
  );
};

export default KakaoButton;
