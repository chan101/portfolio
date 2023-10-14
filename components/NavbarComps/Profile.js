import { Box, Tooltip, IconButton, Avatar } from "@mui/material";

import { useRouter } from "next/router";

import pic from "@/public/pic.jpg"
import Image from "next/image";

const Profile = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Chandan Kumar R">
        <IconButton onClick={navigateToHome} sx={{ p: 0 }}>
          <Avatar alt="Chandan Kumar R" >
            <Image src={pic} layout="fill"/>
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Profile;
