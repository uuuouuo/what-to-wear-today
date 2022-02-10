import React, { useState, useCallback, Dispatch, SetStateAction, useEffect } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { Text } from '@/components/atoms';
import { Title } from '@/components/molecules';
import { useChange } from '@/hooks';
import { TypeType } from '@/types/type';

const questions: TypeType[][] = [
  [
    { _type_no: 0, constitution: '수족냉', description: '손발이 찬가' },
    { _type_no: 1, constitution: '수족온', description: '손발이 따뜻한가' },
  ],
  [
    { _type_no: 2, constitution: '오열', description: '더위를 싫어하는가' },
    { _type_no: 3, constitution: '오한', description: '추위를 싫어하는가' },
  ],
  [
    { _type_no: 4, constitution: '이차자', description: '이불을 차내고 자는가' },
    { _type_no: 5, constitution: '이덮자', description: '이불을 엎고 자는가' },
  ],
  [
    { _type_no: 6, constitution: '물많마', description: '물을 많이 마시는가' },
    { _type_no: 7, constitution: '물적마', description: '물을 적게 마시는가' },
  ],
  [
    { _type_no: 8, constitution: '찬음', description: '찬 음식을 좋아 하는가' },
    { _type_no: 9, constitution: '뜨음', description: '뜨거운 음식을 좋아 하는가' },
  ],
];

const Type: NextPage = () => {
  const QUESTIONS = questions.length;
  const [idx, setIdx] = useState(0);
  const [question, setQuestion] = useState(questions[idx]);
  const [value, setValue, onChange] = useChange('');

  const skipFunction = useCallback(() => {
    Router.push('/signup/success');
  }, []);

  const prevFunction = useCallback(() => {
    setIdx(idx - 1);
    setQuestion(questions[idx - 1]);
  }, [idx]);

  const nextFunction = useCallback(() => {
    setValue('');
    setIdx(idx + 1);
    if (idx + 1 == QUESTIONS) Router.push('/signup/success');
    else setQuestion(questions[idx + 1]);
  }, [idx]);

  return (
    <Styled.MainContainer>
      <Title value="TYPE" />
      <>
        {question.map((type) => {
          return (
            <Styled.CheckInputFormGroup
              value={type.constitution}
              type="radio"
              checked={value === type.constitution}
              name="type"
              onChange={onChange}
            >
              <Styled.Heading level={3}>
                <Text value={type.constitution} />
              </Styled.Heading>
              <Styled.Text value={type.description} />
            </Styled.CheckInputFormGroup>
          );
        })}
      </>
      <Styled.ButtonContainer>
        <Styled.Button onClick={prevFunction} disabled={idx === 0}>
          <Text value="PREV" />
        </Styled.Button>
        <Styled.Button onClick={skipFunction}>
          <Text value="SKIP" />
        </Styled.Button>
        <Styled.Button onClick={nextFunction} disabled={value === ''}>
          <Text value="NEXT" />
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.MainContainer>
  );
};

export default Type;
