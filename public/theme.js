// Theme.js

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0c7cec',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000001',
    },
    secondary: {
      main: '#0ec7e0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});


