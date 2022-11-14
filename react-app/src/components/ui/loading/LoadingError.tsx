import { Alert } from '@mui/material';
import Box from '@mui/material/Box';

interface LoadingErrorProps {
  error?: string,
}

export function LoadingError({ error }: LoadingErrorProps) {
  if (error == null) return null;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
      <Alert severity="error">{error}</Alert>
    </Box>
  );
}
