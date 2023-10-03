// pages/skills.js
import { ThemeProvider } from "@mui/material/styles";
import { useMyTheme } from "./components/ThemeControl";
import {
  CssBaseline,
  Container,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "./components/_Navbar";
import { SkillCard, useSvg } from "./components/SkillCard";

const skills = () => {
  const { chosenTheme, handleThemeChange, finalTheme } = useMyTheme();

  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseline enableColorScheme="true" />
      <Container>
        <Navbar
          title={"Skills"}
          theme={chosenTheme}
          setChosenTheme={handleThemeChange}
        />
      </Container>
      <Container>
        <Toolbar />
      </Container>

      <Accordion defaultExpanded={false} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Programming Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            <SkillCard name={"Java"} svg={useSvg['java']} rating={"4.5"}/>
            <SkillCard name={"JavaScript"} svg={useSvg['javascript']} rating={"4.5"}/>
            <SkillCard name={"HTML5"} svg={useSvg['html5']} rating={"4.5"}/>
            <SkillCard name={"CSS3"} svg={useSvg['css3']} rating={"4.5"}/>
            <SkillCard name={"Python"} svg={useSvg['python']} rating={"4"}/>
            <SkillCard name={"SQL"} svg={useSvg['sql']} rating={"3.5"}/>
            <SkillCard name={"Bash"} svg={useSvg['bash']} rating={"3"}/>
            <SkillCard name={"PHP"} svg={useSvg['php']} rating={"2"}/>
            <SkillCard name={"C & C++"} svg={useSvg['c']} rating={"2"}/>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tools, Frameworks and Other Technologies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            <SkillCard name={"React JS"} svg={useSvg['reactjs']} rating={"4.5"}/>
            <SkillCard name={"Next JS"} svg={useSvg['nextjs']} rating={"3.5"}/>
            <SkillCard name={"Node JS"} svg={useSvg['node']} rating={"4"}/>
            <SkillCard name={"Spring Boot"} svg={useSvg['springboot']} rating={"4"}/>
            <SkillCard name={"Git"} svg={useSvg['git']} rating={"4"}/>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};

export default skills;
