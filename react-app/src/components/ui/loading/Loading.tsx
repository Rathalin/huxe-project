import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface LoadingProps {
  loading?: boolean,
}

export const Loading = ({ loading }: LoadingProps) => {
  if (loading === false) return null;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
      <CircularProgress />
    </Box>
  );
};
