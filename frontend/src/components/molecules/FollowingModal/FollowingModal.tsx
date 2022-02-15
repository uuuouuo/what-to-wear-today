import React, { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Styled from './FollowingModal.styled';
import Avatar from '@mui/material/Avatar';
import Text from '@/components/atoms/Text/Text';

interface Props {
  title: string;
}

const FollowingModal: FunctionComponent<Props> = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const dummyUser = [
    { profileImg: '/images/icon/blank_user.png', nickname: '유저1' },
    { profileImg: '/images/icon/blank_user.png', nickname: '유저2' },
    { profileImg: '/images/icon/blank_user.png', nickname: '유저3' },
    { profileImg: '/images/icon/blank_user.png', nickname: '유저4' },
    { profileImg: '/images/icon/blank_user.png', nickname: '유저5' },
  ];

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>{title}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullScreen
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {dummyUser.map((person, idx) => {
              return (
                <Styled.RowContainer key={idx}>
                  <Avatar src={person.profileImg} sx={{ width: 50, height: 50 }} />
                  <Text value={person.nickname} />
                </Styled.RowContainer>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FollowingModal;
