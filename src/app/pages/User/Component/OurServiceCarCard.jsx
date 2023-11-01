import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import red_car from "../../../assets/Image/red_car.png";
import yellow_car from "../../../assets/Image/yellow_car.png";
import blue_car from "../../../assets/Image/blue_car.png";
import Colors from '../../../utils/Colors';
const OurServiceCard_car = () => {
  const theme = useTheme();

  return (
    <Container sx={{marginTop:"3%"}}>
    <Grid container spacing={10}>
      {/* First Part */}
      <Grid item xs={12} sm={4}>
        <Paper>
        <Typography variant="h5" sx={{color:Colors.palette.color.body,backgroundColor: Colors.palette.background.default,textAlign:"center"}}>HatchBack</Typography>
          <img
            src={red_car}
            alt="Image 1"
            style={{ width: '100%', height: 'auto' }}
          />
          
        </Paper>
      </Grid>

      {/* Second Part */}
      <Grid item xs={12} sm={4}>
        <Paper>
                <Typography sx={{textAlign:"center"}} variant="h5">Sedan</Typography>
          <img
            src={yellow_car}
            alt="Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
  
        </Paper>
      </Grid>

      {/* Third Part */}
      <Grid item xs={12} sm={4}>
        <Paper> 
        <Typography sx={{textAlign:"center"}}  variant="h5">SUV</Typography>
          <img
            src={blue_car}
            alt="Image 3"
            style={{ width: '100%', height: 'auto' }}
          />
         
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
};

export default OurServiceCard_car;
