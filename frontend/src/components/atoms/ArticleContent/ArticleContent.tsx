import React, { FunctionComponent } from 'react';
import Styled from './ArticleContent.styled';

interface Props {
  value: string;
}

const ArticleContent: FunctionComponent<Props> = ({ value }) => {
  return <Styled.AricleContentLayout>{value}</Styled.AricleContentLayout>;
};

export default ArticleContent;
