
import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Subappbar from '../components/Subappbar';

const Subscriptions = () => {
  return (
    <>
    <Subappbar />

    <Box sx={{width:"100%",textAlign:"center",marginTop:"5%",marginBottom:"15%"}}>
        <Grid>
            <Typography variant='h4' sx={{color:"#002C4F"}}>
            <b> Subscriptions </b>
            </Typography>
        </Grid>
       
         

        <Grid container item spacing={2} sx={{justifyContent:"center",marginTop:"5%"}}>
      <Grid item xs={12} sm={6} md={4} >
    <Card sx={{borderRadius:"20px",bgcolor:" #FFFFFF"}}>
      <CardContent>
      <Typography variant='h4' sx={{ textAlign:"center", color:" #DC77FF"}} >
        <b>  Platinum <br/>
          ₹ 2199 / month</b>
      </Typography>
      <Typography sx={{marginTop:"8%"}}>
      <ul>
           <li>
               Exterior Wash, removing dust and grime.
           </li> <br/>
           <li>
               Interior Vaccuming, dusting seats and carpets and floor mats.
           </li> <br/>
           <li>
               Cleaning and Polishing all windows and mirrors.
           </li> <br/>
           <li>
               Cleaning and Shining tires and rims.
           </li> <br/>
           <li>
               Wiping down interior surface, including dashboard and door panels.
           </li> 
           <li>
               Exterior Wash, removing dust and grime.
           </li> <br/>
           <li>
               Interior Vaccuming, dusting seats and carpets and floor mats.
           </li> <br/>
           <li>
               Cleaning and Polishing all windows and mirrors.
           </li> <br/>
           <li>
               Cleaning and Shining tires and rims.
           </li> <br/>
           <li>
               Wiping down interior surface, including dashboard and door panels.
           </li> 
          </ul>
      </Typography>

      <Typography sx={{textAlign:"left",marginLeft:"4%"}}>
      Expiring on: 04/10/2023
      </Typography>
       
      <Typography sx={{marginTop:"8%"}}>
       <Button variant='contained' 
       sx={{borderRadius:"22px",bgcolor:"#353535",height:"55px", width:"150px",marginInline:"30%"}}>
        Cancel 
       </Button>
       </Typography>

      </CardContent>
    </Card>
    </Grid>
     </Grid>
      
    </Box>
        
   
    
    </>
  );
}

export default Subscriptions;
