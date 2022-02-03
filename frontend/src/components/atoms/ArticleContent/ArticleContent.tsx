import React, { FunctionComponent } from 'react';

interface Props {
  value: string;
}

const ArticleImage: FunctionComponent<Props> = ({ value }) => {
  return <div>{value}</div>;
};

export default ArticleImage;
