import styled from '@emotion/styled';
import BaseDialog from '@mui/material/Dialog';
import BaseDialogActions from '@mui/material/DialogActions';
import { Button as BaseButton } from '@/components/atoms';

const Dialog = styled(BaseDialog)`
  & .MuiPaper-rounded {
    border-radius: 0;
  }
`;

const DialogActions = styled(BaseDialogActions)`
  padding: 0;
`;

const Button = styled(BaseButton)`
  flex: 1;
  margin: 0 !important;
  padding: 2vh;

  &.agree {
    background-color: #000;
  }

  &.disagree {
    background-color: #d5d5d3;
  }
`;

export default { Dialog, DialogActions, Button };
