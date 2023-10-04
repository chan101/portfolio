import {
  Grid,
  Card,
  CardContent,
  Stack,
  Rating,
  Typography,
} from "@mui/material";

import Image from "next/image";

import { useTheme } from "@mui/material/styles";


const SkillCard = (props) => {
  const theme = useTheme();
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={1.71}>
      <Card
        sx={{
          backgroundColor: theme.palette.tertiary.main,
          minWidth: 150,
          display: "grid",
          placeItems: "center",
        }}
      >
        <CardContent>
          <Stack spacing={1}>
            <Typography
              variant="h5"
              sx={{ display: "grid", placeItems: "center" }}
            >
              {props.name}
            </Typography>
            <div style={{ display:"grid", placeContent:"center"}}>
            <Image
              src={props.svg}
              alt="Java"
              style={{ maxWidth: "100px", maxHeight: "100px"}}
            />
            </div>
            <Rating
              name="half-rating-read"
              defaultValue={props.rating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

//svg stuff

const importAll = (r) => {
  let svgs = {};
  r.keys().forEach((key) => {
    const svgName = key.replace('./', '').replace('.svg', '');
    svgs[svgName] = r(key).default;
  });
  return svgs;
};

const useSvg = importAll(require.context('../../public/svgs', false, /\.svg$/));


export {SkillCard, useSvg}


