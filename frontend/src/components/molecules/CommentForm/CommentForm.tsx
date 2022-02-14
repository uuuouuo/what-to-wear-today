import React, { FunctionComponent } from 'react';
import Styled from './CommentForm.styled';
import SendIcon from '@mui/icons-material/Send';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  onClick: (e: React.MouseEvent) => void;
}

const CommentForm: FunctionComponent<Props> = ({ value, onChange, onClick }) => {
  return (
    <Styled.Form>
      <Styled.Textarea value={value} onChange={onChange} />
      <Styled.Button type="submit" onClick={onClick}>
        <SendIcon />
      </Styled.Button>
    </Styled.Form>
  );
};

export default CommentForm;
