
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ButtonAppBar from "../../partials/AppBar"

import Colors from '../../utils/Colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
 import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
 import LocationOnIcon from '@mui/icons-material/LocationOn';


const Booking = () => {
  return (
    <>
  <ButtonAppBar/>

     <Box>
    <Typography variant="h4" sx={{textAlign: "center", marginBlock: "2rem", color: Colors.palette.primary.main}}>
                    Bookings
                </Typography>

     </Box>
    
     <Container sx={{sm:"5"}}>
    <Grid container item spacing={2} sx={{justifyContent:"center"}}>
      <Grid item xs={12} sm={6} md={4} >
    <Card sx={{borderRadius:"20px",bgcolor:" #FFFFFF"}}>
      <CardContent>
      <Typography variant='h5' sx={{marginTop:"5%", textAlign:"center", color:" #013C6B"}} >
        <b> Routine Clean<br/>
         ₹ 499</b>
      </Typography>
      <Typography >
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
          </ul>
      </Typography> <br/> <br/>
      <Box sx={{display:"flex", justifyContent: "space-around"}}>
           <Typography> <CalendarMonthIcon/><b>29-09-2023</b></Typography> 
           <Typography> <AccessAlarmIcon /><b>2:00 PM</b></Typography> 
          </Box> <br/> <br/>

          <Typography>
             <LocationOnIcon/>  Lorem ipsum dolor sit amet At laboriosam maiores 
           </Typography>


       <Typography align='center'>

      <Button variant="outlined" size="large" sx={{backgroundColor: Colors.palette.primary.main, color: Colors.palette.primary.color, marginBlock: "3rem"}}>
          cancel
        </Button>
      
       </Typography>
      

      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} >
    <Card sx={{borderRadius:"20px",bgcolor:"#FFFFFF"}}>
    <CardContent>
    <Typography variant='h5' sx={{marginTop:"5%", textAlign:"center", color:" #013C6B"}} >
        <b> Routine Clean<br/>
         ₹ 499</b>
      </Typography>
      <Typography >
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
          </ul>
      </Typography><br/> <br/>

      <Box sx={{display:"flex", justifyContent: "space-around"}}>
            <Typography> <CalendarMonthIcon/><b>29-09-2023</b></Typography> 
            <Typography> <AccessAlarmIcon /><b>2:00 PM</b></Typography> 
           </Box> <br/> <br/>

           <Typography>
             <LocationOnIcon/>  Lorem ipsum dolor sit amet At laboriosam maiores 
           </Typography>
      <Typography align='center'>

<Button variant="outlined" size="large" sx={{backgroundColor: Colors.palette.primary.main, color: Colors.palette.primary.color, marginBlock: "3rem"}}>
    cancel
  </Button>

 </Typography>
      </CardContent>
    </Card>
    </Grid>
      
    <Grid item xs={12} sm={6} md={4}>
    <Card sx={{borderRadius:"20px",bgcolor:"#FFFFFF"}}>
      <CardContent>
    <Typography variant='h5' sx={{marginTop:"5%", textAlign:"center", color:" #013C6B"}} >
        <b> Routine Clean<br/>
         ₹ 499</b>
      </Typography>
      <Typography >
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
          </ul>
      </Typography> <br/> <br/>
      <Box sx={{display:"flex", justifyContent: "space-around"}}>
           <Typography> <CalendarMonthIcon/><b>29-09-2023</b></Typography> 
            <Typography> <AccessAlarmIcon /><b>2:00 PM</b></Typography> 
           </Box> <br/> <br/>

           <Typography justifyContent={'center'}>
             <LocationOnIcon/> 
              Lorem ipsum dolor sit amet At laboriosam maiores 
           </Typography>

      <Typography align='center'>

<Button variant="outlined" size="large" sx={{backgroundColor: Colors.palette.primary.main, color: Colors.palette.primary.color, marginBlock: "3rem"}}>
    cancel
  </Button>

 </Typography>
      </CardContent> 
    </Card>
    </Grid>
       

    </Grid>
    </Container>
      
    </>
  );
}

export default Booking;
















 