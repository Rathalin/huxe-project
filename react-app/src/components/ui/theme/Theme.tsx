import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '50px',
          height: '60px',
          '&:hover': {
            backgroundColor: '#873CC9'
          }
        },
        text: {
          '&:hover': {
            backgroundColor: '#323463'
          }
        },
        outlined: {
          borderRadius: '10px',
          height: '50px',
          color: '#E8EAF6',
          borderColor: '#FFC107',
          backgroundColor: '#323463',
          '&:hover': {
            backgroundColor: '#FFC107',
            borderColor: '#422cb0',
            color: '#422cb0',
          }
        }
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#7958E3', //'#3a048c',
      light: '#6e38bd',
      dark: '#422cb0',
      contrastText: '#E8EAF6'
    },
    secondary: {
      main: '#FFC107',
      light: '#fff350',
      dark: '#c79100',
      contrastText: '#E8EAF6'
    },
    background: {
      default: '#1C1F53',//'#F6F2F7',
    },
    text: {
      primary: '#E8EAF6', //'#00005d',
      secondary: '#FFC107',
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontFamily: 'Amiri',
      fontWeight: 700
    },
    h2: {
      fontFamily: 'Amiri',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Amiri',
      fontWeight: 700,
      margin: '20px',
    },
    h4: {
      fontFamily: 'Amiri',
      fontWeight: 700
    },
    h5: {
      fontFamily: 'Mulish',
      fontWeight: 500,
      margin: '30px 0px 20px 0px',
    },
  },
};

export const Theme = () => {
  return createTheme(themeOptions);
};
