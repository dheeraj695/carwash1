import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import car1 from "../../../assets/Image/car1guest.png"
const Guest1 = () => {
  return (
    <>

<Box
        sx={{
            display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
          color: 'white',
          backgroundImage: `url(${car1})`, // Use the backgroundImage property to set the image
          backgroundSize: 'cover', // Optional: Adjust the background size as needed
          backgroundPosition: 'center', // Optional: Adjust the background position as needed
          minHeight: '500px', // Optional: Set a minimum height for the box
          marginTop:{xl:"0%",md:"0%",xs:"2%"},
        
          
        }}
      >
       {/* Left Section */}
       {/* <Box
        sx={{
          flex: 1, // Take up available space
          padding: '20px', // Adjust padding as needed
        }}
      >
       <Typography variant='h2'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          fringilla tincidunt nulla, sit amet varius purus cursu
       </Typography>
       
       
      </Box> */}
      <Grid container spacing={3}>
          {/* Your Grid items here */}
          
          <Grid item xs={12} sm={8} md={6}  padding={"2%"} sx={{ marginInline: { xs: "0%", sm: "0%" }, mt:"6%"}}>
          <Box marginLeft={"2%"}>
            <Typography  variant="h2" gutterBottom>
            Lorem ipsum
dolor sit amet,
consectetur adipiscing elit
            </Typography>
        
          </Box>
        </Grid>
           </Grid>

        
      </Box>   
    </>
  )
}

export default Guest1