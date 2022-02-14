import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  selected: {
    background: '#000',
    '& span': {
      color: '#fff',
    },
  },
  indicator: {
    background: 'transparent',
  },
});

export default { useStyles };
