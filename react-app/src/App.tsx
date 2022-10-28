import React from 'react';
import logo from './logo.svg';
import './styles.scss';
import { MoodPriorityExample } from './components/MoodPriorityExample'
import { Dashboard } from './components/Dashboard';
import { StrongEmotion } from './components/StrongEmotion';
import { Notes } from './components/Notes';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { palette } from '@mui/system';

const theme = createTheme ({
  palette: {
    primary: {
      light: '#373652',
      main: '#31347D',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#fff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
        <header className="App-header">
          <Dashboard/>
          <Notes/>
          <StrongEmotion/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
