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

const About = () => {
  const downloadResume = () => {
    alert("resume yet to be added");
  };
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
              Passionate and enthusiastic software developer who approaches
              challenges with creativity and determination. I'm the kind of guy
              who, before buying anything, will explore the possibility of
              crafting a DIY version, always eager to learn and experiment.My
              dream is to join a team where colleagues become friends, working
              together to create innovative solutions and having a great time
              along the way.
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
              <div
                id="resume"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "20px",
                }}
                onClick={downloadResume}
              >
                <Typography variant="p" fontSize="25px" color="secondary">
                  Résumé
                </Typography>
                <AdfScanner
                  fontSize="large"
                  sx={{ marginLeft: "15px" }}
                  color="secondary"
                />
              </div>
            </Tooltip>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
