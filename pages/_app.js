//import '@/styles/globals.css'
import '@/styles/scrollbar.css'
import { ThemeProvider } from "@mui/material/styles";
import { useMyTheme } from "./components/ThemeControl";
import { CssBaseline, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const { chosenTheme, handleThemeChange, finalTheme } = useMyTheme();
  const router = useRouter();
  const [title,setTitle] = useState("");
  const pathname = router.pathname;

  useEffect(()=>{
    if(pathname=='/'){
      setTitle("Home")
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
        <CssBaseline enableColorScheme="true" />

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
