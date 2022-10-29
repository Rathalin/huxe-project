import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Loading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
      <CircularProgress />
    </Box>
  );
}
