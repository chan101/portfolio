// pages/skills.js

import skillsData from "@/data/skills.json"
import SkillBox from "../components/SkillsComps/SkillBox";
import { useTheme } from "@mui/material/styles";
const skills = () => {
  const theme = useTheme();
  return (
      <div>
      {
        skillsData.map((skill)=>(
          <SkillBox title={skill.title} skills={skill.skills}/>
        ))
      }
      </div>
  );
};

export default skills;
