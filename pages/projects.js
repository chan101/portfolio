import ProjectCard from "@/components/ProjectCard";
import { Grid } from "@mui/material";
import projectsData from "../data/projects.json";

const projects = () => {
  return (
    <Grid container>
      {projectsData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </Grid>
  );
};

export default projects;
