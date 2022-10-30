import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3a048c',
      light: '#6e38bd',
      dark: '#00005d',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffb300',
      light: '#ffe54c',
      dark: '#c68400',
      contrastText: '#000036'
    },
    background: {
      default: '#F6F2F7',
    },
    text: {
      primary: '#00005d',
      secondary: '#3F3E40',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Muli',
  },
};

export const Theme = () => {
  return createTheme(themeOptions);
}
