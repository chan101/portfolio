// Theme.js

import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0ec7e0',
    },
    tertiary: {
      main: '#5d5d5d',
    },
    fontColor:{
      main: '#000000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#0ec7e0',
    },
    tertiary: {
      main: '#5d5d5d',
    },
    fontColor:{
      main: '#ffffff',
    },
  },
});


