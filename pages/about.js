import {
  Typography,
  Container,
  Grid,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import { AdfScanner } from "@mui/icons-material";

const About = () => {
  const downloadResume = () => {
    alert("resume yet to be added");
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={7} md={8} lg={9} xl={9}>
          <Container
            sx={{
              display: "grid",
              placeItems: "center",
              marginTop: "20px",
            }}
          >
            <Typography variant="h4" gutterBottom={true}>
              HELLO THERE,
            </Typography>
            <Typography variant="h2" gutterBottom={true} align="center">
              I'M CHANDAN KUMAR R
            </Typography>
            <Typography variant="h5">Full Stack Developer</Typography>
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
              src="/static/images/avatar/1.jpg"
              sx={{ width: 200, height: 200 }}
              variant="rounded"
            />
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
      <Container
        sx={{
          display: "grid",
          placeItems: "center",
          marginTop: "40px",
        }}
      >
        <Typography variant="subtitle1" align="center">
          Passionate and enthusiastic software developer who approaches
          challenges with creativity and determination. I'm the kind of guy who,
          before buying anything, will explore the possibility of crafting a DIY
          version, always eager to learn and experiment. I'm not only a code
          enthusiast but also a self-proclaimed "god of bad jokes," and I
          believe that a little humor can make even the most complex projects
          more enjoyable. My dream is to join a team where colleagues become
          friends, working together to create innovative solutions and having a
          great time along the way.
        </Typography>
      </Container>
    </>
  );
};

export default About;
