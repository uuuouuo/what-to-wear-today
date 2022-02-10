import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { Text } from '@/components/atoms';
import { Title } from '@/components/molecules';
import { useCheck } from '@/hooks';
import { InterestType } from '@/types/interest';

const dummy: InterestType[] = [
  { _interest_no: 0, interest_name: '여행' },
  { _interest_no: 1, interest_name: '비즈니스' },
  { _interest_no: 2, interest_name: '히히히' },
  { _interest_no: 3, interest_name: '헤헤' },
  { _interest_no: 4, interest_name: '오오오오오오' },
  { _interest_no: 5, interest_name: '하위이이잉' },
  { _interest_no: 6, interest_name: '안농' },
  { _interest_no: 7, interest_name: '읭' },
  { _interest_no: 8, interest_name: '이이ㅣ이' },
  { _interest_no: 9, interest_name: '섹 시 우 먼' },
  { _interest_no: 10, interest_name: '공부공부' },
  { _interest_no: 11, interest_name: '공부' },
  { _interest_no: 12, interest_name: '화이팅' },
  { _interest_no: 13, interest_name: '새해 복' },
  { _interest_no: 14, interest_name: '힛' },
  { _interest_no: 15, interest_name: '겨울' },
  { _interest_no: 16, interest_name: '여행' },
  { _interest_no: 17, interest_name: '비즈니스' },
  { _interest_no: 18, interest_name: '히히히' },
  { _interest_no: 19, interest_name: '헤헤' },
  { _interest_no: 20, interest_name: '오오오오오오' },
  { _interest_no: 21, interest_name: '하위이이잉' },
  { _interest_no: 22, interest_name: '안농' },
  { _interest_no: 23, interest_name: '읭' },
  { _interest_no: 24, interest_name: '이이ㅣ이' },
  { _interest_no: 25, interest_name: '섹 시 우 먼' },
  { _interest_no: 26, interest_name: '공부공부' },
  { _interest_no: 27, interest_name: '공부' },
  { _interest_no: 28, interest_name: '화이팅' },
  { _interest_no: 29, interest_name: '새해 복' },
  { _interest_no: 30, interest_name: '힛' },
  { _interest_no: 31, interest_name: '겨울' },
];

const Interest: NextPage = () => {
  const [interests, , onChangeInterest] = useCheck([]);

  const isChecked = useCallback(
    (interest: number): boolean => {
      return interests.filter((item: string) => parseInt(item) === interest).length > 0;
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
            type="checkbox"
            value={interest._interest_no}
            checked={isChecked(interest._interest_no)}
            name="interest"
            onChange={onChangeInterest}
          >
            <Text value={interest.interest_name} />
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

export default Interest;
