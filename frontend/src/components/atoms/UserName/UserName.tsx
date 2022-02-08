import React, { FunctionComponent } from 'react';

interface Props {
  value: string;
}

const UserName: FunctionComponent<Props> = ({ value }) => {
  return <div>{value}</div>;
};

export default UserName;
