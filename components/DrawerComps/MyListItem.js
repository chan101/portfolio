import {
    IconButton,
    ListItem,
    ListItemButton,
    Typography,
  } from "@mui/material";

const MyListItem = (props) => {
  return (
    <ListItem key={props.name} disablePadding>
      <ListItemButton onClick={props.handle}>
        <IconButton color="secondary" edge="start">
          {props.icon}
        </IconButton>
        <Typography flex="1" variant="p" align="center" sx={{ fontSize:'20px'}}>
          {props.name}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default MyListItem;
