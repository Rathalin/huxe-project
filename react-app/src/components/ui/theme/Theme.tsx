import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#31347D',
      light: '#7FAFF3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#7FAFF3',
    },
    text: {
      primary: '#31347D',
      secondary: 'rgba(49,52,125,0.5)',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Lato',
  },
};

export const Theme = () => {
  return createTheme(themeOptions);
}
