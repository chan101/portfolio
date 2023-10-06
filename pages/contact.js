// pages/contact.js
import {
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  Tooltip,
} from "@mui/material";

import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";


import { useTheme } from "@mui/material/styles";

const contact = () => {
  const theme = useTheme();

  const handleEmail = () => {
    const email = "chandankumarchan1999@gmail.com";
    const mailtoUrl = `mailto:${email}`;
    window.open(mailtoUrl, "_blank");
  };
  const handleCall = () => {
    const phoneNumber = "+919686407238";
    const telUrl = `tel:${phoneNumber}`;
    window.open(telUrl, "_blank");
  };
  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/wWfHTYQgM7Nio9u29", "_blank");
  };
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/chandan-kumar-32522a1ab",
      "_blank"
    );
  };
  const handleWhatsApp = () => {
    const phoneNumber = "9686407238";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (

      <Container sx={{ display: "grid", placeItems: "center"}}>
        <Card sx={{ maxWidth: 350, margin: 2, backgroundColor: theme.palette.custom1.main }} >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Contact Info
            </Typography>
            <Typography variant="h5" component="div">
              Chandan Kumar R
            </Typography>
            <List>
              <ListItem>
                <Tooltip title="Email">
                  <IconButton
                    color="secondary"
                    edge="start"
                    onClick={handleEmail}
                  >
                    <Email />
                  </IconButton>
                </Tooltip>
                <Typography variant="body2">
                  chandankumarchan1999@gmail.com
                </Typography>
              </ListItem>
              <ListItem>
                <Tooltip title="Call">
                  <IconButton
                    color="secondary"
                    edge="start"
                    onClick={handleCall}
                  >
                    <Phone />
                  </IconButton>
                </Tooltip>
                <Typography variant="body2">+91 9686407238</Typography>
              </ListItem>
              <ListItem>
                <Tooltip title="Location">
                  <IconButton
                    color="secondary"
                    edge="start"
                    onClick={handleLocation}
                  >
                    <LocationOn />
                  </IconButton>
                </Tooltip>
                <Typography variant="body2">Bengaluru - 560057</Typography>
              </ListItem>
              <ListItem>
                <Tooltip title="LinkedIn">
                  <IconButton color="secondary" onClick={handleLinkedIn}>
                    <LinkedIn fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="WhatsApp">
                  <IconButton color="secondary" onClick={handleWhatsApp}>
                    <WhatsApp fontSize="large" />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
  );
};

export default contact;
