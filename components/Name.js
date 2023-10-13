
import { Typography } from '@mui/material';
import {Paper} from '@mui/material';

const Name = () => {
  return (
    <Paper elevation={2} component="span" sx={{ p: 2, border: '1px dashed grey', margin:"10px" }}>
    <Typography variant='h3' align='center' gutterBottom={true}>I'M CHANDAN KUMAR </Typography>
    <Typography variant='h6' align='center'>Full Stack Developer </Typography>
    </Paper>
  );
}

export default Name;