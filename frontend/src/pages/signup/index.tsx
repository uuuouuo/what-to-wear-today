import React from 'react';
import type { NextPage } from 'next';
import Avatar from '@mui/material/Avatar';
import Styled from './styled';
import useChange from '@/hooks/useChange';
import PersonIcon from '@mui/icons-material/Person';

const Login: NextPage = () => {
  const [value, , onChange] = useChange('');
  const changePhoto = (e: React.MouseEvent) => {
    console.log('change');
  };

  return (
    <Styled.Container>
      <Styled.Title level={1} value="SIGN UP" color="#fff" />
      <Styled.ProfileContainer>
        <Avatar src="/broken-image.jpg" sx={{ width: 100, height: 100 }} onClick={changePhoto} />
        <Styled.FormGroup type="text" value={value} onChange={onChange}>
          <PersonIcon />
        </Styled.FormGroup>
      </Styled.ProfileContainer>
    </Styled.Container>
  );
};

export default Login;
