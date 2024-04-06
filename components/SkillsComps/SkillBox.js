import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SkillCard from "./SkillCard";
import { useTheme } from "@mui/material/styles";

const SkillBox = (props) => {
  const importAll = (r) => {
    let svgs = {};
    r.keys().forEach((key) => {
      const svgName = key.replace("./", "").replace(".svg", "");
      svgs[svgName] = r(key).default;
    });
    return svgs;
  };

  const useSvg = importAll(require.context("@/public/svgs", false, /\.svg$/));

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
          {props.skills &&
            useSvg &&
            props.skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                svg={useSvg[skill.svg]}
                rating={skill.rating}
              />
            ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SkillBox;
