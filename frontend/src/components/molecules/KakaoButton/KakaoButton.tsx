import React, { FunctionComponent, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { KAKAO_CALLBACK_URL } from '@/config';

interface Props {
  className?: string;
}

const KakaoButton: FunctionComponent<Props> = ({ className }) => {
  const onClick = useCallback((e: React.MouseEvent) => {
    window.location.replace(KAKAO_CALLBACK_URL);
  }, []);

  return (
    <Button type="button" className={className} onClick={onClick} bgColor="transparent">
      <Image src="/images/kakaoButton/kakao_login_medium_wide.png" width={300} height={45} />
    </Button>
  );
};

export default KakaoButton;
