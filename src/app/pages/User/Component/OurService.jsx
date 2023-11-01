import React from 'react';
import { Grid, Divider, Button, Typography, Box } from '@mui/material';
import line from "../../../assets/Image/ourline.png"
import Colors from '../../../utils/Colors';
const OurService = () => {
  return (
    <Box>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">
          <span style={{ marginLeft: '3%', color: Colors.palette.background.default }}>
            <b>Our Service</b> <img src={line} alt="Line" style={{
              maxWidth: '100%', // Default size for xs breakpoint
              width: 'auto',
              height: 'auto'
            }} />
          </span>

          <Button>
            See All
          </Button>
        </Typography>
      </Grid>
    </Grid>
  </Box>
  );
}

export default OurService;
