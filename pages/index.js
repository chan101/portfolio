import About from "./about";
import Work_XP from "./work_XP";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import {
  ChevronLeft,
  School,
  WorkHistory,
  Engineering,
  Construction,
  Call,
} from "@mui/icons-material";

import CustomChip from "@/components/CustomChip";

import {Container} from "@mui/material";

const Home = () => {
  return (
    <Container sx={{display:"grid", placeItems:"center"}}>
      <About/>
      <CustomChip
        icon={<WorkHistory sx={{ marginRight: "25px", fontSize: "30px" }} />}
        title="Work Experience"
      />
      <Work_XP />
      <CustomChip
        icon={<School sx={{ marginRight: "25px", fontSize: "30px" }} />}
        title="Education"
      />
      <Education />
      <CustomChip
        icon={<Engineering sx={{ marginRight: "25px", fontSize: "30px" }} />}
        title="Skills"
      />
      <Skills />
      <CustomChip
        icon={<Construction sx={{ marginRight: "25px", fontSize: "30px" }} />}
        title="Projects"
      />
      <Projects />
      <CustomChip
        icon={<Call sx={{ marginRight: "25px", fontSize: "30px" }} />}
        title="Contact"
      />
      <Contact />
    </Container>
  );
};

export default Home;
