import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useRouter } from "next/router";

import ThemeChanger from "./ThemeChanger";

const Profile = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const router = useRouter();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigateToContact = () => {
    handleCloseUserMenu();
    router.push('/contact');
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Chandan Kumar R">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Chandan Kumar R" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key={"setting"} onClick={navigateToContact}>
          <Typography textAlign="center">{"Contact"}</Typography>
        </MenuItem>
        <MenuItem>
          <ThemeChanger {...props} />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
