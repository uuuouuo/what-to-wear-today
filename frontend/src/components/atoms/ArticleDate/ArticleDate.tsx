import React, { FunctionComponent } from 'react';

interface Props {
  value: string;
}

const ArticleDate: FunctionComponent<Props> = ({ value }) => {
  return <div>{value}</div>;
};

export default ArticleDate;
