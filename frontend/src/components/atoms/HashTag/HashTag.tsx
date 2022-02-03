import React, { FunctionComponent } from 'react';

interface Props {
  value: Array<string>;
}

const HasgTag: FunctionComponent<Props> = ({ value }) => {
  return <div>{value}</div>;
};

export default HasgTag;
