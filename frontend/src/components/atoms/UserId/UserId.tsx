import React, { FunctionComponent } from 'react';

interface Props {
  value: string;
}

const UserId: FunctionComponent<Props> = ({ value }) => {
  return <div>{value}</div>;
};

export default UserId;
