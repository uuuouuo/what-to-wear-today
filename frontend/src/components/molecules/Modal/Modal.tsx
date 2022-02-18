import React, { FunctionComponent } from 'react';
import Styled from './Modal.styled';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Text } from '@/components/atoms';

interface Props {
  className?: string;
  title?: string;
  content: string;
  open: boolean;
  agreeFunction: () => void;
  disagreeFunction: () => void;
}

const Modal: FunctionComponent<Props> = ({
  className,
  title,
  content,
  open,
  agreeFunction,
  disagreeFunction,
}) => {
  return (
    <Styled.Dialog
      className={className}
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title ? <DialogTitle id="alert-dialog-title">{title}</DialogTitle> : <></>}
      <DialogContent>
        <Text value={content} />
      </DialogContent>
      <Styled.DialogActions>
        <Styled.Button className="disagree" onClick={disagreeFunction}>
          <Text value="아니오" size="0.8rem" />
        </Styled.Button>
        <Styled.Button className="agree" onClick={agreeFunction}>
          <Text value="예" color="#fff" size="0.8rem" />
        </Styled.Button>
      </Styled.DialogActions>
    </Styled.Dialog>
  );
};

export default Modal;
