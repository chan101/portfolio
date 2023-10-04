import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SkillCard from "./SkillCard";
import useSvg from "./loadSvgs";
import { useTheme } from "@mui/material/styles";

const MyAccordion = (props) => {
  const theme = useTheme();
  return (
    <Accordion
      defaultExpanded={false}
      sx={{ margin: "20px", backgroundColor: theme.palette.custom1.main }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={4}>
          {props.skills.map((skill) => (
            <SkillCard name={skill.name} svg={useSvg[skill.svg]} rating={skill.rating} />
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
