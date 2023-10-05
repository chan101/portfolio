import { Box, Tooltip, IconButton, Avatar } from "@mui/material";

import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Chandan Kumar R">
        <IconButton onClick={navigateToHome} sx={{ p: 0 }}>
          <Avatar alt="Chandan Kumar R" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Profile;
