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
      main: '#0a8ed0',
    },
    tertiary: {
      main: '#fffcfc',
    },
    fontColor:{
      main: '#000000',
    },
    custom1:{
      main: '#bdbdbd'
    },
    custom2:{
      main: '#bdbdbd'
    }
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
      main: '#2d2d2d',
    },
    fontColor:{
      main: '#ffffff',
    },
    custom1:{
      main: '#121212'
    },
    custom2:{
      main: '#202020'
    }
  },
});


