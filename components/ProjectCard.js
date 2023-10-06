import { useState } from "react";
import { styled } from "@mui/material/styles";
import { GitHub, Preview, ExpandMore } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import ImageCarousel from "./ImageCarousel";
import { useTheme } from "@mui/material/styles";

const ExpandMoreMain = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(props) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{ margin: "20px",backgroundColor: theme.palette.custom1.main }}>
        <CardHeader title={props.title} subheader={props.date} />
        <ImageCarousel imagesFolder={props.imagesFolder} noOfImages={props.noOfImages}/>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.tech}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Source Code">
            <IconButton color="secondary" aria-label="Source Code" onClick={()=>{window.open(props.source,'_blank')}}>
              <GitHub fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Live Preview">
            <IconButton color="secondary" aria-label="Live Preview" onClick={()=>{window.open(props.live,'_blank')}}>
              <Preview fontSize="large" />
            </IconButton>
          </Tooltip>
          <ExpandMoreMain
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </ExpandMoreMain>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{props.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
