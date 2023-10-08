import { Divider,Typography } from "@mui/material";
const CustomChip = (props) => {
  return (
    <div style={{ margin: "100px" }}>
      <Divider>
        <div
          style={{ display: "flex", justifyContent: "start", marginTop: "5px" }}
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
    </div>
  );
};

export default CustomChip;
