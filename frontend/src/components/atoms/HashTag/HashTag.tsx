import Styled from './HashTag.styled';
import React, { FunctionComponent } from 'react';

interface Props {
  value: Array<string>;
}

const HashTag: FunctionComponent<Props> = ({ value }) => {
  return <Styled.HashTag>{value}</Styled.HashTag>;
};

export default HashTag;
