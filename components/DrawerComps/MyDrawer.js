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
  Backdrop,
} from "@mui/material";

import {
  ChevronLeft,
  AccountCircle,
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
import MyListItem from "./MyListItem";

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
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
    props.handleDrawer();
  };
  const navigateAbout = () => {
    router.push("/about");
    props.handleDrawer();
  };
  const navigateEdu = () => {
    router.push("/education");
    props.handleDrawer();
  };
  const navigateWXP = () => {
    router.push("/work_XP");
    props.handleDrawer();
  };
  const navigateSkills = () => {
    router.push("/skills");
    props.handleDrawer();
  };
  const navigateProj = () => {
    router.push("/projects");
    props.handleDrawer();
  };

  const navigateContact = () => {
    router.push("/contact");
    props.handleDrawer();
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: 3, backdropFilter: "blur(4px)" }}
        open={props.drawToggle}
        onClick={props.handleDrawer}
      ></Backdrop>
      <Drawer
        sx={{
          width: drawerWidth,
          zIndex: 10,
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
            <MyListItem name={"Home"} handle={navigateHome} icon={<Home />} />
            <MyListItem
              name={"About"}
              handle={navigateAbout}
              icon={<AccountCircle />}
            />
            <MyListItem
              name={"Work Experience"}
              handle={navigateWXP}
              icon={<WorkHistory />}
            />
            <MyListItem
              name={"Education"}
              handle={navigateEdu}
              icon={<School />}
            />
            <MyListItem
              name={"Skills"}
              handle={navigateSkills}
              icon={<Engineering />}
            />
            <MyListItem
              name={"Projects"}
              handle={navigateProj}
              icon={<Construction />}
            />
            <MyListItem
              name={"Contact"}
              handle={navigateContact}
              icon={<Call />}
            />
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
    </div>
  );
};

export default MyDrawer;
