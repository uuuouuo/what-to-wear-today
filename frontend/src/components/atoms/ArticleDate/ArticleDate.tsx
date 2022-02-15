import React, { FunctionComponent } from 'react';
import Styled from './ArticleDate.styled';

interface Props {
  value: string;
}

const ArticleDate: FunctionComponent<Props> = ({ value }) => {
  return <Styled.ArticleDateLayout>{value}</Styled.ArticleDateLayout>;
};

export default ArticleDate;
