import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
  ButtonGroup,
  Box,
} from "@mui/material";

import {
  ChevronLeft,
  School,
  WorkHistory,
  Engineering,
  Construction,
  Home,
  Call,
  LightMode,
  DarkMode,
  SettingsBrightness,
} from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyDrawer = (props) => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
  };
  const navigateEdu = () => {
    router.push("/education");
  };
  const navigateWXP = () => {
    router.push("/work_XP");
  };
  const navigateSkills = () => {
    router.push("/skills");
  };
  const navigateProj = () => {
    router.push("/projects");
  };

  const navigateContact = () => {
    router.push("/contact");
  };

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
        <Box>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton onClick={navigateHome}>
              <IconButton color="secondary" edge="start">
                <Home />
              </IconButton>
              <Typography flex="1" variant="h6" align="center">
                Home
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Education"} disablePadding>
            <ListItemButton onClick={navigateEdu}>
              <IconButton color="secondary" edge="start">
                <School />
              </IconButton>
              <Typography flex="1" variant="h6" align="center">
                Education
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Work Experience"} disablePadding>
            <ListItemButton onClick={navigateWXP}>
              <IconButton color="secondary" edge="start">
                <WorkHistory />
              </IconButton>
              <Typography flex="1" variant="h6" align="center">
                Work Experience
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Skills"} disablePadding>
            <ListItemButton onClick={navigateSkills}>
              <IconButton color="secondary" edge="start">
                <Engineering />
              </IconButton>
              <Typography flex="1" variant="h6" align="center">
                Skills
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Projects"} disablePadding>
            <ListItemButton onClick={navigateProj}>
              <IconButton color="secondary" edge="start">
                <Construction />
              </IconButton>
              <Typography flex="1" variant="h6" align="center">
                Projects
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contact"} disablePadding>
            <ListItemButton onClick={navigateContact}>
              <IconButton color="secondary" edge="start">
                <Call />
              </IconButton>
              <Typography flex="1" variant="h6" align="center">
                Contact
              </Typography>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <ButtonGroup size="medium" aria-label="medium button group">
          <Button
            key="Light"
            onClick={() => {
              props.setChosenTheme("light");
            }}
            color={props.theme == "light" ? "secondary" : "fontColor"}
          >
            <LightMode />
          </Button>
          <Button
            key="System"
            onClick={() => {
              props.setChosenTheme("system");
            }}
            color={props.theme == "system" ? "secondary" : "fontColor"}
          >
            <SettingsBrightness />
            <Typography variant="p" marginLeft="5px" fontSize="10px">
              System
            </Typography>
          </Button>
          <Button
            key="Dark"
            onClick={() => {
              props.setChosenTheme("dark");
            }}
            color={props.theme == "dark" ? "secondary" : "fontColor"}
          >
            <DarkMode />
          </Button>
        </ButtonGroup>
      </div>
    </Drawer>
  );
};

export default MyDrawer;
