import {
  Typography,
  Container,
  Grid,
  Avatar,
  Tooltip,
} from "@mui/material";
import { AdfScanner } from "@mui/icons-material";
import pic from "@/public/pic.jpg"

import Image from "next/image";
import aboutData from "@/data/about.json"

const About = () => {
  return (
    <>
      <Grid container direction="column-reverse">
        <Grid item xs={12} sm={7} md={8} lg={9} xl={9}>
          <Container
            sx={{
              display: "grid",
              placeItems: "center",
              marginTop: "40px",
            }}
          >
            <Typography variant="subtitle1" align="center">
              {aboutData.about}
            </Typography>
          </Container>
        </Grid>

        <Grid item xs={12} sm={5} md={4} lg={3} xl={3}>
          <Container
            sx={{
              display: "grid",
              placeItems: "center",
              marginTop: "20px",
            }}
          >
            <Avatar
              alt="Chan"
              src="/public/pic.jpg"
              sx={{ width: 250, height: 250 }}
              variant="circular">
            <Image src={pic} layout="fill"/>
          </Avatar>

            <Tooltip title="Download Resume">
              <a
                href='/resume.pdf'
                download='chandan_kumar_r.pdf'
                id="resume"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "20px",
                  textDecoration: "none"
                }}
              >
                <Typography variant="p" fontSize="25px" color="secondary">
                  Résumé
                </Typography>
                <AdfScanner
                  fontSize="large"
                  sx={{ marginLeft: "15px" }}
                  color="secondary"
                />
              </a>
            </Tooltip>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
