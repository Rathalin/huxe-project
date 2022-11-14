import { Alert } from '@mui/material';
import Box from '@mui/material/Box';

interface LoadingSuccessProps {
  success?: string,
}

export function LoadingSuccess({ success }: LoadingSuccessProps) {
  if (success == null) return null;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
      <Alert severity="success">{success}</Alert>
    </Box>
  );
}
