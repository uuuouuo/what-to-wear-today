import styled from '@emotion/styled';
import navAction from '@mui/material/BottomNavigationAction';

const BottomNavigationAction = styled(navAction)`
  color: silver;
  &.Mui-selected {
    color: purple;
  }
`;

export default { BottomNavigationAction };
