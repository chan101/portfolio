// pages/index.js
import { ThemeProvider } from '@mui/material/styles';
import {darkTheme, lightTheme} from '@/public/theme';

import Navbar from './components/_Navbar';
import { useState } from 'react';



const Home = () => {
  const [theme, setTheme] = useState(true);

  const handleThemeChange = () => {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme?darkTheme:lightTheme}>
    <Navbar themeChange={handleThemeChange} theme={theme} title={'Home'}/>
    
    </ThemeProvider>
  );
};

export default Home;
