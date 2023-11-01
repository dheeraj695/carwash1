import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#002C4F',
        color: 'white',
        width: '100%',
        marginTop: "5%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ marginInline: "3%" }}>
          <Grid item xs={15} sm={3} md={3} marginTop='2%' sx={{ color: "white" }}>
            <Typography variant="h4">
              <b> Logo </b>
            </Typography>
            <Typography sx={{ marginTop: "11%" }}>
              About us: Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit, sed do eiusmod <br />
              tempor incididunt ut labore et dolore magna <br />
              aliqua. Ut enim ad minim veniam, quis nostrud <br />
              exercitation.
            </Typography>
            <Typography variant="body2" color="white" sx={{ marginTop: '12%', marginBottom: "17%" }}>
              <CopyrightIcon />  2021 Car Wash. All Rights Reserved
            </Typography>
          </Grid>

          <Grid item xs={15} sm={2} marginTop='4%'>
            <Typography variant="body1" color="white" gutterBottom>
              <b> PAGES</b>
            </Typography>
            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '11%' }}>
              Services
            </Typography>
            <Typography variant="body2" color="white" gutterBottom >
              About Us
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Contact Us
            </Typography>
          </Grid>

          <Grid item xs={15} sm={2} marginTop='4%'>
            <Typography variant="body1" color="white" gutterBottom>
              <b> CARS</b>
            </Typography>
            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '11%' }}>
              HatchBack
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Sedan
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              SUV
            </Typography>
          </Grid>

          <Grid item xs={15} sm={2} marginTop='4%'>
            <Typography variant="body1" color="white" gutterBottom>
              <b>SERVICES </b>
            </Typography>
            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '11%' }}>
              Routine Clean
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Dry Clean
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Deep Clean
            </Typography>
          </Grid>

          <Grid item xs={15} sm={3} marginTop='4%'>
            <Typography variant="body2" color="grey" gutterBottom>
              (303) 985-0105, (303) 355-0105
            </Typography>
            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '10%' }}>
              mifs@info.com
            </Typography>
            <Typography variant="body2" color="grey" gutterBottom sx={{ marginTop: '10%' }}>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Typography>
            <Typography variant="body2" color="white" gutterBottom sx={{ marginTop: '10%' }}>
              <InstagramIcon /> <FacebookIcon sx={{ marginLeft: '15%' }} /> <TwitterIcon sx={{ marginLeft: '15%' }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
