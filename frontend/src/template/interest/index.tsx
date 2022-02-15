import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { Text } from '@/components/atoms';
import { Title } from '@/components/molecules';
import { useCheck } from '@/hooks';
import { InterestType } from '@/types/interest';

const dummy: InterestType[] = [
  { no: 0, interestName: '여행' },
  { no: 1, interestName: '비즈니스' },
  { no: 2, interestName: '히히히' },
  { no: 3, interestName: '헤헤' },
  { no: 4, interestName: '오오오오오오' },
  { no: 5, interestName: '하위이이잉' },
  { no: 6, interestName: '안농' },
  { no: 7, interestName: '읭' },
  { no: 8, interestName: '이이ㅣ이' },
  { no: 9, interestName: '섹 시 우 먼' },
  { no: 10, interestName: '공부공부' },
  { no: 11, interestName: '공부' },
  { no: 12, interestName: '화이팅' },
  { no: 13, interestName: '새해 복' },
  { no: 14, interestName: '힛' },
  { no: 15, interestName: '겨울' },
  { no: 16, interestName: '여행' },
  { no: 17, interestName: '비즈니스' },
  { no: 18, interestName: '히히히' },
  { no: 19, interestName: '헤헤' },
  { no: 20, interestName: '오오오오오오' },
  { no: 21, interestName: '하위이이잉' },
  { no: 22, interestName: '안농' },
  { no: 23, interestName: '읭' },
  { no: 24, interestName: '이이ㅣ이' },
  { no: 25, interestName: '섹 시 우 먼' },
  { no: 26, interestName: '공부공부' },
  { no: 27, interestName: '공부' },
  { no: 28, interestName: '화이팅' },
  { no: 29, interestName: '새해 복' },
  { no: 30, interestName: '힛' },
  { no: 31, interestName: '겨울' },
];

const InterestTemplate: NextPage = () => {
  const [interests, , onChangeInterest] = useCheck([]);

  const isChecked = useCallback(
    (interest: number): boolean => {
      return interests.filter((item: string) => parseInt(item, 10) === interest).length > 0;
    },
    [interests],
  );

  const skipFunction = useCallback(() => {
    Router.push('/signup/success');
  }, []);

  const nextFunction = useCallback(() => {
    Router.push('/type');
  }, []);

  return (
    <Styled.MainContainer>
      <Title value="INTEREST" />
      <Styled.InterestContainer>
        {dummy.map((interest) => (
          <Styled.CheckInputFormGroup
            key={interest.no}
            type="checkbox"
            value={interest.no}
            checked={isChecked(interest.no)}
            name="interest"
            onChange={onChangeInterest}
          >
            <Text value={interest.interestName} />
          </Styled.CheckInputFormGroup>
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

export default InterestTemplate;
