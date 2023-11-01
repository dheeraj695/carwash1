import React from 'react';
// import ButtonApp from "../../partials/ButtonApp";
// import Ellipse from '../../assets/Image/Ellipse 434.png';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, TextField} from '@mui/material';
import Divider from '@mui/material/Divider';

const Profile = () => {
  return (
    <>
    {/* <ButtonApp/> */}
    <Container maxWidth='sm' sx={{marginBlock:'5%'}}>
    <Card sx={{borderRadius:"12px",bgcolor:" #ffffff",height:'auto'}}>
      <CardContent>
      <div style={{ display: 'flex', justifyContent:'flex-end',color:'#013C6B' ,cursor:'pointer',marginTop:'8%'}}>
       <b>Edit</b>
      </div>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5%' }}>
      <img src="/nkjkmi" alt="" width='135px' height='135px' />
      </div>
      <form>
      <Grid container spacing={2} sx={{marginBottom:'10%'}}>
  <Grid item xs={4} md={4}  >
  <TextField
            fullWidth
            label="First Name"
             variant="outlined"
             Textcolor="secondary"
             sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
           
          />
  </Grid>
  <Grid item xs={8} md={8}>
  <TextField
            fullWidth
            label="Surname"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
                 "& fieldset": { border: "none" },height: '35px'
               }}
               InputLabelProps={{
                style: { color: '#1520A6' },}}
            
          />
          
  </Grid>
  <Grid item xs={6} md={6}>
  <TextField
            fullWidth
             label="Contact Number"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none"},
              height: '35px',
              "& input": {color: '#013C6B' },
              
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
          />
            

  </Grid>
  
  <Grid item xs={6} md={6}>
  <TextField
            fullWidth
            label="Alternate Number"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
                "& fieldset": { border: "none" },height: '35px'
              }}
              InputLabelProps={{
                style: { color: '#1520A6' }}}
          />
  </Grid>
  <Grid item xs={12} md={12}>
  <TextField
            fullWidth
            label="Email ID"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
          />
  </Grid>
  <Grid item xs={12} md={12} sx={{marginLeft:'-2%'}}>
  <TextField
            fullWidth
            label="Address"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
          />
  </Grid>
  <Grid item xs={12} md={12}>
  <TextField
            fullWidth
            label="Locality/Building/Street/Society"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
          />
  </Grid>
  <Grid item xs={6} md={6}>
  <TextField
            fullWidth
            label="City/Town"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
          />
  </Grid>
  <Grid item xs={6} md={6}>
  <TextField
            fullWidth
            label="District"
            variant="outlined"
            name="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
           
          />
  </Grid>
  <Grid item xs={8} md={8}>
  <TextField
            fullWidth
            label="State"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
          />
  </Grid>
  <Grid item xs={4} md={4}>
  <TextField
            fullWidth
            label="Pincode"
            variant="outlined"
            name="field1"
            id="field1"
            sx={{
              "& fieldset": { border: "none" },height: '35px'
            }}
            InputLabelProps={{
              style: { color: '#1520A6' },}}
            
          />
  </Grid>
</Grid>
</form>
      </CardContent>
    </Card>
    
    </Container>
    </>
  )
}

export default Profile;