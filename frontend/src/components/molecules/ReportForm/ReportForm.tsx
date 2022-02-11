import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { Button, Text } from '@/components/atoms';

import Styled from './ReportForm.styled';

const ReportForm = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const sendMessage = () => {
    console.log('d');
  };

  return (
    <div>
      <Button onClick={handleOpen}>신고</Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" sx={Styled.style} noValidate autoComplete="off">
          <Styled.FormContainer>
            <TextField
              id="outlined-textarea"
              label="제목"
              sx={{ mb: 2 }}
              multiline
              maxRows={4}
              fullWidth
            />
            <TextField
              id="outlined-textarea"
              label="내용"
              sx={{ mb: 2 }}
              multiline
              maxRows={13}
              fullWidth
            />
            <Styled.Button onClick={sendMessage}>
              <Text value="제출" />
            </Styled.Button>
          </Styled.FormContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default ReportForm;
