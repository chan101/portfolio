import Profile from "./Profile";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, IconButton, Toolbar } from "@mui/material";

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MyAppBar = (props) => {
  return (
    <AppBar position="fixed" open={props.drawToggle}>
      <Toolbar variant="regular">
        <IconButton
          color="secondary"
          aria-label="open drawer"
          onClick={props.handleDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography flex="4" variant="h5" noWrap component="div" align="center">
          {props.title}
        </Typography>

        <Profile themeChange={props.themeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
