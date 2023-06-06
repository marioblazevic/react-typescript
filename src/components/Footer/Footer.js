import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <Box sx={{ p: 1 }} component="footer" className={classes.position}>
      <Typography variant="h6" align="center" gutterBottom>
        Levi9
      </Typography>
    </Box>
  );
};

export default Footer;
