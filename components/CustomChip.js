import { Divider, Typography } from "@mui/material";
const CustomChip = (props) => {
  return (
    <Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "5px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "5px",
          }}
        >
          {props.icon}
        </div>
        <Typography variant="p" fontSize="30px">
          {props.title}
        </Typography>
      </div>
    </Divider>
  );
};

export default CustomChip;
