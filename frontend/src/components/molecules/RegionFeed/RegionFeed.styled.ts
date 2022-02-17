import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'IBMPlexSansKR',
    color: '#fff',
    '& .Mui-focused': {
      color: '#fff',
    },
    '& .Mui-focused:after': {
      borderColor: '#fff',
    },
  },
});

export default { useStyles };
