import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { Text } from '@/components/atoms';
import { Title } from '@/components/molecules';
import { useCheck } from '@/hooks';

const dummy = [
  '여행',
  '비즈니스',
  '히히히',
  '헤헤',
  '오오오오오오',
  '하위이이잉',
  '안농',
  '읭',
  '이이ㅣ이',
  '섹 시 우 먼',
  '공부공부',
  '공부',
  '화이팅',
  '새해 복',
  '힛',
  '겨울',
  '여행',
  '비즈니스',
  '히히히',
  '헤헤',
  '오오오오오오',
  '하위이이잉',
  '안농',
  '읭',
  '이이ㅣ이',
  '섹 시 우 먼',
  '공부공부',
  '공부',
  '화이팅',
  '새해 복',
  '힛',
  '겨울',
];

const Login: NextPage = () => {
  const [interests, , onChangeInterest] = useCheck([]);

  const isChecked = useCallback(
    (interest: string): boolean => {
      console.log(interest, interests);
      return interests.filter((item: string) => item === interest).length > 0;
    },
    [interests],
  );

  const skipFunction = useCallback(() => {
    Router.push('/');
  }, []);

  const nextFunction = useCallback(() => {
    Router.push('/type');
  }, []);

  return (
    <Styled.MainContainer>
      <Title value="INTEREST" />
      <Styled.InterestContainer>
        {dummy.map((interest) => (
          <Styled.CheckBoxFormGroup
            value={interest}
            checked={isChecked(interest)}
            onChange={onChangeInterest}
          />
        ))}
      </Styled.InterestContainer>
      <Styled.ButtonContainer>
        <Styled.Button className="left" onClick={skipFunction}>
          <Text value="SKIP" />
        </Styled.Button>
        <Styled.Button className="right" onClick={nextFunction}>
          <Text value="NEXT" />
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.MainContainer>
  );
};

export default Login;
