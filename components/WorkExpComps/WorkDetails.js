import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

export default function WorkDetails(props) {
  const theme = useTheme();
  return (
    <div>
      {props.workDetails.map((data) => (
        <Accordion
          sx={{
            marginTop: "10px",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ marginTop: "10px" }}
          >
            <Typography variant="p">{data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {data.list.map((item, index) => (
                <ListItem key={index}>
                  <Typography variant="p">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
