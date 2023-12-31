import { useState } from "react";
import { Box } from "@mui/material";

import MyAppBar from "./MyAppBar";
import MyDrawer from "../DrawerComps/MyDrawer";

export default function Navbar(props) {
  const [drawToggle, setDrawToggle] = useState(false);

  const handleDrawer = () => {
    setDrawToggle(!drawToggle);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MyAppBar
        handleDrawer={handleDrawer}
        drawToggle={drawToggle}
        {...props}
      />
      <MyDrawer
        handleDrawer={handleDrawer}
        drawToggle={drawToggle}
        {...props}
      />
    </Box>
  );
}
