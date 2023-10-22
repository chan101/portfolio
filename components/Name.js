
import { Typography } from '@mui/material';
import {Paper} from '@mui/material';
import { useTheme } from "@mui/material/styles";
const Name = () => {
  const theme = useTheme();
  return (
    <Paper elevation={2} component="span" sx={{ p: 2, border: '5px solid grey', borderRadius: '10px', margin:"10px" ,  background: theme.palette.custom2.main}}>
    <Typography variant='h3' align='center' gutterBottom={true}>I'M CHANDAN KUMAR </Typography>
    <Typography variant='h6' align='center'>Full Stack Developer </Typography>
    </Paper>
  );
}

export default Name;