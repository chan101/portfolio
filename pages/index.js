// pages/index.js
import { ThemeProvider } from "@mui/material/styles";
import { useMyTheme } from "./components/ThemeControl";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/_Navbar";

const Home = () => {
  const { chosenTheme, handleThemeChange, finalTheme } = useMyTheme();

  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline enableColorScheme="true" />
      <Navbar
        title={"Home"}
        theme={chosenTheme}
        setChosenTheme={handleThemeChange}
      />
    </ThemeProvider>
  );
};

export default Home;
