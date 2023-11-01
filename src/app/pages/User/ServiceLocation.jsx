
import React from 'react';
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import car1 from "../../assets/Image/car1guest.png"
import PaymentOptions from './Component/PaymentOption';
import { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

function ServiceLocation() {
    const [selectedValue, setSelectedValue] = useState('CarWash centre');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop:"0.5%"
  };

  const formStyle = {
    width: '100%', // Full width
    marginTop: '3%',
  };

  
   const submitButtonStyle = {
    margin: '20px 0',
   width: '150px', // Adjust the width as needed
 borderRadius: '10px', // Adjust the border radius as needed
 //margin: '0 auto', // Center the button horizontally
 display: 'block', // Ensure the button takes up the full width of its container
 textAlign: 'center',
 marginTop:"5%" ,
 marginLeft:"40%"
 //{xs:"20%",sm:"30%",md:"40%"}
 };
 
  const img={
    backgroundImage: `url(${car1})`,
    backgroundPosition: 'center', // Center the background image
  backgroundSize: 'cover',      // Make the background image cover the container



  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("your-background-image-url.jpg")',
        backgroundColor: ' #F5F5F5',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"2%"
      }}
    >
      <Container component="main" maxWidth="md">
        <Grid container >
          <Paper elevation={3} style={paperStyle} >

            <Typography variant="h6">Enter your credentials here:</Typography>
            <form style={formStyle} noValidate>
         
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="alternateNumber"
                    label="Alternate Number"
                    name="alternateNumber"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}sm={4}>
                {/* <Typography variant='h6'>Payment mode:<br/></Typography> */}
                <PaymentOptions/>
                </Grid>
                <Grid item xs={12}>
                <Typography variant='h6'>Address<br/></Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Locality / Building / Street / Society"
                    label="Locality / Building / Street / Society"
                    name="Locality / Building / Street / Society"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="city/Town"
                    label="City / Town  District"
                    name="city/Town"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id=" District"
                    label=" District"
                    name=" District"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="State"
                    label="State"
                    name="State"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pincode"
                    label=" Pincode"
                    name="Pincode"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                <Typography variant='h6'>Do you want the service at:<br /></Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="location" name="location" value={selectedValue} onChange={handleChange}>
                    <FormControlLabel value="My place" control={<Radio />} label="My place" />
                    <FormControlLabel value="CarWash centre" control={<Radio />} label="CarWash centre" />
                    </RadioGroup>
                </FormControl>
                </Grid>

                <Grid item xs={12}>
                <Typography variant='h6'>Pickup Location<br/></Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/Locality / Building / Street / Society"
                    label="Locality / Building / Street / Society"
                    name=" Pickup Location/Locality / Building / Street / Society"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/city/Town"
                    label="City / Town  District"
                    name="Pickup Location/city/Town"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id=" Pickup Location/District"
                    label=" District"
                    name=" Pickup Location/District"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/State"
                    label="State"
                    name="Pickup Location/State"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Pickup Location/Pincode"
                    label=" Pincode"
                    name="Pickup Location/Pincode"
                  />
                </Grid>



              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={submitButtonStyle}
              >
              submit
              </Button>
              
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiceLocation;
