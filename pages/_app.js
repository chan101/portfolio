//import '@/styles/globals.css'
import '@/styles/scrollbar.css'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/public/theme";

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


const useMyTheme = () => {
  const [systemTheme, setSystemTheme] = useState("dark");
  const [chosenTheme, setChosenTheme] = useState("system");

  useEffect(() => {
    detectTheme();
  }, []);

  const detectTheme = () => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setSystemTheme(isDarkMode ? "dark" : "light");

      const userTheme = localStorage.getItem("chosenTheme");
      setChosenTheme(userTheme !== null ? userTheme : "system");
    }
  };

  const handleThemeChange = (theme) => {
    setChosenTheme(theme);
    localStorage.setItem("chosenTheme", theme);
  };
  const finalTheme =
    chosenTheme === "system"
      ? systemTheme === "dark"
        ? darkTheme
        : lightTheme
      : chosenTheme === "dark"
      ? darkTheme
      : lightTheme;
  return { chosenTheme, handleThemeChange, finalTheme };
};