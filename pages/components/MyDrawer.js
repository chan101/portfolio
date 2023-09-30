import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  ChevronLeft,
  School,
  ExpandMore,
  ExpandLess,
  WorkHistory,
  Construction,
  Home
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useRouter } from "next/router";



const drawerWidth = 250;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyDrawer = (props) => {
  const [openEdu, setOpenEdu] = useState(false);
  const [openWXP, setOpenWXP] = useState(false);
  const [openProj, setOpenProj] = useState(false);
  const router = useRouter();

  const navigateHome = () => {
    router.push('/')
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
      variant="persistent"
      anchor="left"
      open={props.drawToggle}
    >
      <DrawerHeader>
        <IconButton color="secondary" onClick={props.handleDrawer}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <List>
      <ListItem key={"Home"} disablePadding>
          <ListItemButton onClick={navigateHome}>
            <IconButton color="secondary" edge="start">
              <Home />
            </IconButton>
            <Typography flex="1" variant="h6" align="center" >
              Home
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Education"} disablePadding>
          <ListItemButton>
            <IconButton color="secondary" edge="start">
              <School />
            </IconButton>
            <Typography flex="1" variant="h6" align="center" >
              Education
            </Typography>
            {openEdu ? (
              <ExpandLess
                color="secondary"
                onClick={() => {
                  setOpenEdu(!openEdu);
                }}
              />
            ) : (
              <ExpandMore
                color="secondary"
                onClick={() => {
                  setOpenEdu(!openEdu);
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openEdu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem key={"Work Experience"} disablePadding>
          <ListItemButton>
            <IconButton color="secondary" edge="start">
              <WorkHistory />
            </IconButton>
            <Typography flex="1" variant="h6" align="center">
              Work Experience
            </Typography>
            {openWXP ? (
              <ExpandLess
                color="secondary"
                onClick={() => {
                  setOpenWXP(!openWXP);
                }}
              />
            ) : (
              <ExpandMore
                color="secondary"
                onClick={() => {
                  setOpenWXP(!openWXP);
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openWXP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem key={"Projects"} disablePadding>
          <ListItemButton>
            <IconButton color="secondary" edge="start">
              <Construction />
            </IconButton>
            <Typography flex="1" variant="h6" align="center">
              Projects
            </Typography>
            {openProj ? (
              <ExpandLess
                color="secondary"
                onClick={() => {
                  setOpenProj(!openProj);
                }}
              />
            ) : (
              <ExpandMore
                color="secondary"
                onClick={() => {
                  setOpenProj(!openProj);
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openProj} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
