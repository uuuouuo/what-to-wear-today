import React, { FunctionComponent } from 'react';
import Styled from './Textarea.styled';

interface Props {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const textarea: FunctionComponent<Props> = ({ className, value, onChange }) => {
  return <Styled.Textarea className={className} value={value} onChange={onChange} />;
};

export default textarea;
