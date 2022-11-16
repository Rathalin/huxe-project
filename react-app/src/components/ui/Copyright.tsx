import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright = (props: any) => {
  return (
    <Typography component='footer' color='text.secondary' align='center'
      sx={{ mt: 3, pt: 2, pb: 2 }} {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/Rathalin/huxe-project'>
        Andrea Haider-Pachtrog, Daniel Flockert, Lisa Lamplmair
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
