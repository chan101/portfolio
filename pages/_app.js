//import '@/styles/globals.css'
import '@/styles/scrollbar.css'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../components/NavbarComps/Navbar";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useMyTheme } from '../components/DrawerComps/ThemeControl';

export default function App({ Component, pageProps }) {
  const { chosenTheme, handleThemeChange, finalTheme } = useMyTheme();
  const router = useRouter();
  const [title,setTitle] = useState("");
  const pathname = router.pathname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://scorpion-absolute-recently.ngrok-free.app/test/');
        
      } catch (error) {
      }
    };

    fetchData();
  }, []);
  useEffect(()=>{
    if(pathname=='/'){
      setTitle("Home")
    }
    else if(pathname=='/about'){
      setTitle("About")
    }
    else if(pathname=='/education'){
      setTitle("Education")
    }
    else if(pathname=='/work_XP'){
      setTitle("Work Experience")
    }
    else if(pathname=='/skills'){
      setTitle("Skills")
    }
    else if(pathname=='/projects'){
      setTitle("Projects")
    }
    else if(pathname=='/contact'){
      setTitle("Contact")
    }
  },[pathname])

  return (
    <main>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        <Navbar
          title={title}
          theme={chosenTheme}
          setChosenTheme={handleThemeChange}
        />
        <Toolbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}


