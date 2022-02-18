import styled from '@emotion/styled';
import BaseDialog from '@mui/material/Dialog';
import BaseDialogActions from '@mui/material/DialogActions';
import { Button as BaseButton } from '@/components/atoms';

const Dialog = styled(BaseDialog)`
  & .MuiPaper-rounded {
    border-radius: 0;
  }
`;

export default { Dialog };
