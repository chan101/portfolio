// pages/skills.js
import { ThemeProvider } from "@mui/material/styles";
import { useMyTheme } from "./components/ThemeControl";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/_Navbar";

const skills = () => {
  const { chosenTheme, handleThemeChange, finalTheme } = useMyTheme();

  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline enableColorScheme="true" />
      <Navbar
        title={"Skills"}
        theme={chosenTheme}
        setChosenTheme={handleThemeChange}
      />
    </ThemeProvider>
  );
};

export default skills;
