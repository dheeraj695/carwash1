
import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Colors from '../../../utils/Colors';
import Up from "../../../assets/Image/up_Quotes.png";
import Down from "../../../assets/Image/down_Quotes.png"

const dashedBorderStyle = {
    border: '4px dashed #013C6B', // Define the dashed border style
    // padding: '20px',
    height: '100%',
    position: 'relative',
    
  };
  const downPhotoStyle = {
    position: 'absolute',
     bottom: '0',
    right: '0',
    Top:"2"
  };

function Reviews() {
  return (
    <Box sx={{marginInline:"3%"}}>
      <Typography sx={{color:Colors.palette.background.default}} variant="h4" gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={2}>
      {/* first Reviews */}
        <Grid item xs={12} sm={6} md={3}>  
          <Paper elevation={3} style={dashedBorderStyle}>
         <img src={Up}  /> 
         <Paper sx={{marginInline:"5%"}}>
           <Typography variant="h6" gutterBottom>
           dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <h4 style={{textAlign:"center" ,marginTop:"2%"}}><b>~ Amet ipsum</b></h4>
            </Paper>
            <img src={Down}  style={downPhotoStyle}  /> 
          </Paper>
        </Grid>
        {/* second reviews */}
        <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={dashedBorderStyle}>
         <img src={Up}  /> 
         <Paper sx={{marginInline:"5%"}}>
           <Typography variant="h6" gutterBottom>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <h4 style={{textAlign:"center" ,marginTop:"2%"}}><b>~ Lorem ipsum</b></h4>
            </Paper>
            <img src={Down}  style={downPhotoStyle}  /> 
          </Paper>
        </Grid>
        {/* third reviews */}
        <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={dashedBorderStyle}>
         <img src={Up}  /> 
         <Paper sx={{marginInline:"5%"}}>
           <Typography variant="h6" gutterBottom>
           sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <h4 style={{textAlign:"center" ,marginTop:"2%"}}><b>~ Adipiscing</b></h4>
            </Paper>
            <img src={Down}  style={downPhotoStyle}  /> 
          </Paper>
        </Grid>
        {/* fourth Reviews */}
        <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={dashedBorderStyle}>
         <img src={Up}  /> 
         <Paper sx={{marginInline:"5%"}}>
           <Typography variant="h6" gutterBottom>
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <h4 style={{textAlign:"center" ,marginTop:"2%"}}><b>~ Amet ipsum</b></h4>
            </Paper>
            <img src={Down}  style={downPhotoStyle}  /> 
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reviews;
