import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Ourplan = () => {
  return (
    <>
    <Box sx={{
      width:"100%",
      marginTop:"3%"
    }}>
    
        <Grid sx={{marginLeft:"10%",marginRight:"10%"}}>
            <Typography variant="h5" sx={{color:"#002C4F"}}>
            <b> Our Plans </b>
            </Typography>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud <br/> 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Grid>
   
    </Box>
    </>
  );
}

export default Ourplan;
