import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';

interface LoadingErrorProps {
  error: string,
}

export function LoadingError({ error: message }: LoadingErrorProps) {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
}
