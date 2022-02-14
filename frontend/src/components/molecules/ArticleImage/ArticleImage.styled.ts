import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';

const Stepper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const useStyles = makeStyles({
  dot: {
    width: '5px',
    height: '5px',
    margin: '0 5px',
  },
  dotActive: {
    background: '#000',
  },
});

export default { Stepper, useStyles };
