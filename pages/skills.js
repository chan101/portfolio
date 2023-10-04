// pages/skills.js

import skillsData from "@/data/skills.json"
import MyAccordion from "./components/MyAccordion";
import { useTheme } from "@mui/material/styles";
const skills = () => {
  const theme = useTheme();
  return (
      <div>
      {
        skillsData.map((skill)=>(
          <MyAccordion title={skill.title} skills={skill.skills}/>
        ))
      }
      </div>
  );
};

export default skills;
