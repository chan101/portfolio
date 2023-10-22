
import { darkTheme, lightTheme } from "../../public/theme";
import { useEffect, useState } from "react";

export const useMyTheme = () => {
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