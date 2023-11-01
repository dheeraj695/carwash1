import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import Colors from '../../../utils/Colors';
import car1 from "../../../assets/Image/AboutCar.png"
const AboutGuest = () => {
  return (
    <Box>
      <Grid container spacing={4} sx={{marginTop:"3%"}}>
    
        {/* Left Side Content */}
        
        <Grid item xs={12} sm={6} md={8} >
        {/* <br/><Typography variant="h6"  sx={{ color: "white",
        marginTop:{xs:"0px"}
        }}></Typography> sx={{marginTop:{xs:"0%",sm:"10%"}*/}
             
          <Typography variant="h5" sx={{marginLeft:"5%",color:Colors.palette.background.default}} gutterBottom>
        <b>   About Us</b> 
          </Typography>
   
          <Typography variant="body1" sx={{marginLeft:"5%"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
(see more)
          </Typography>
         
         
        </Grid>
      

        {/* Right Side Image */}
        {/* <Grid item xs={12} md={8}>
          <img
            src={Memo}
            alt="Interactive Image"
            style={{
              maxWidth:'100%',
              height: 'auto',
            }}
          />
        </Grid> */}
        <Grid item xs={12} sm={6} md={4} style={{ position: 'relative' }}>
  <img
    src={car1}
    alt="Interactive Image"
    style={{
      maxWidth: '100%',
      height: 'auto',
      marginTop:{xs:"0%",sm:"10%"}
    }}
    
  />
</Grid>

      </Grid>
    </Box>
  );
};

export default AboutGuest;
