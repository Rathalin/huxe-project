import { CustomAppbar } from './components/CustomAppbar';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './components/ui/theme/Theme';
import { Copyright } from './components/Copyright';
import { CustomRouter } from './components/routes/Router';

const theme = Theme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className='app' disableGutters={true}>
        <CssBaseline />
        <CustomAppbar />
        <Container component='main' maxWidth='xl'>
          <CustomRouter />
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
