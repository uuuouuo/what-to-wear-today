import React, { FunctionComponent } from 'react';
import Styled from './ButtonModal.styled';

interface Props {
  className?: string;
  children: React.ReactChild;
  open: boolean;
}

const Modal: FunctionComponent<Props> = ({ className, children, open }) => {
  return (
    <Styled.Dialog
      className={className}
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
    </Styled.Dialog>
  );
};

export default Modal;
