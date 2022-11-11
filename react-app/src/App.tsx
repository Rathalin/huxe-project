import { CustomAppbar } from './components/ui/CustomAppbar';
import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './components/ui/theme/Theme';
import { Copyright } from './components/ui/Copyright';
import { CustomRouter } from './components/routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = Theme();
const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box className='app' sx={{ height: '100vh' }}>
          <CssBaseline />
          <CustomAppbar />
          <Container component='main' maxWidth='xl' >
            <CustomRouter />
          </Container>
          <Copyright />
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
