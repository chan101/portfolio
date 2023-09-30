
import { ThemeProvider } from '@mui/material/styles';
import {darkTheme, lightTheme} from '@/public/theme';

import Navbar from './components/_Navbar';
import { useState } from 'react';



const About = () => {
  const [theme, setTheme] = useState(true);

  const handleThemeChange = () => {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme?darkTheme:lightTheme}>
    <Navbar themeChange={handleThemeChange} theme={theme} title={"About"}/>
    </ThemeProvider>
  );
};

export default About;
