import { Box, Button, Container, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Grid, Rating } from '@mui/material';
import React from 'react';

import img3 from '../../assets/Image/3.png';
import vector2 from '../../assets/Image/Vector (2).png';
import vector1 from '../../assets/Image/Vector (1).png';
import snowfall from '../../assets/Image/u_snowflake.png';
import Colors from '../../utils/Colors';
import image from '../../assets/Image/1.png';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import avtar from '../../assets/Image/avatar.png';
import avtar1 from '../../assets/Image/avatar (1).png';
import vector3 from '../../assets/Image/Vector (3).png';
import ButtonAppBar from '../../partials/AppBar';
import group from '../../assets/Image/Group 33946.png';
import Footer from '../../partials/Footer';
import AboutGuest from './Component/AboustGuest';
import Question from './Component/Question';



const About = () => {
  return (
    <>
      {/* <ButtonAppBar /> */}
      <AboutGuest />

      <Container>

        {/* main Box */}

        <Box sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "center", alignItems: "center", gap: "5%" }}>

          {/* Left side Box */}

          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Typography variant="h4" sx={{ color: Colors.palette.primary.main, marginBottom: "2rem", }}>
              <b>  Professional Washing  <br /> And Cleaning </b>
            </Typography> <br />
            <Typography  >

              Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos. Eum laudantium porro aut officiis quaerat ad voluptatibus deleniti ad inventore dolorem sit optio soluta. Non officia consequatur et quod porro eum sapiente velit sit porro dolores qui culpa ratione.
            </Typography><br /> <br />

            <Button size='large' sx={{ backgroundColor: Colors.palette.background.default, color: Colors.palette.primary.color }} >+91-0000-000000</Button>
            <Button size='large' sx={{ border: "1px solid blue", marginLeft: "2%" }}>Our Services</Button>


          </Box>

          {/* Right side Box */}

          <Box>
            <Box>
              <img src={vector2} style={{ width: "80%", marginTop: "2rem" }} />

            </Box>




          </Box>

        </Box>







        {/* second line */}






        {/* main Box */}



        <Box sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "center", alignItems: "center", gap: "5%", marginBottom: "10rem" }}>

          {/* left side */}


          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Typography variant="h4" sx={{ color: Colors.palette.primary.main }}>
              <b>  Dry Cleaning Any Dirt  <br /> Inside the Car</b>
            </Typography> <br />
            <Typography sx={{ marginBottom: "2rem" }}>

              Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos. Eum laudantium porro aut officiis quaerat ad voluptatibus deleniti ad inventore dolorem sit optio soluta. Non officia consequatur et quod porro eum sapiente velit sit porro dolores qui culpa ratione.
            </Typography>


          </Box>

          {/* Right side Box */}
          <Box>
            <Box>
              <img src={img3} style={{ width: "80%", marginTop: "2rem" }} />

            </Box>




          </Box>

        </Box>










        {/* Third Line */}





        {/* <Box sx={{display: {xs: "none", md: "flex"}}}>
  <img src={group}/>
</Box>


<Typography variant='h4' sx={{color: Colors.palette.primary.main, textAlign: "center", marginTop: {md: "-30rem"}}}>
                 <b> Our Washing Service </b> 
                </Typography> <br/> <br/>




<Box sx={{display: {xs: "block", md: "flex"}, textAlign: "center"}}>




  <Box sx={{ border: "1px solid black", m: "1rem", borderRadius: "20px"}}>
  <Typography variant='h6'>
            <img src={snowfall}/><br/>
           <b>Contactless Washing </b> 
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam <br/> maiores in illum nihil aut. <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

  </Box>
  <Box sx={{ border: "1px solid black", m: "1rem", borderRadius: "20px"}}>
  <Typography variant='h6'>
            <img src={avtar}/> <br/>
            <b> Saftey Materials</b> 
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam <br/> maiores in illum nihil <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

  </Box>
  <Box sx={{ border: "1px solid black", m: "1rem", borderRadius: "20px"}}>
  <Typography variant='h6'>
            <img src={avtar1}/> <br/>
            <b>  Modern Equipment</b>
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam  <br/>maiores in illum nihil aut. <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>
  </Box>
  <Box sx={{ border: "1px solid black", m: "1rem", borderRadius: "20px"}}>
  <Typography variant='h6'>
            <img src={vector3}/> <br/>
            <b>  Extensive Cleaning </b>
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam <br/> maiores in illum nihil aut <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

  </Box>
</Box> */}


        {/* Grid method */}







        {/* <Box sx={{display: {xs: "none", sm: "none", lg: "flex"}}}>
                    <img src={group} />
                </Box>


                <Box sx={{marginTop: {lg:"-26rem"}}}>
                <Typography variant='h4' sx={{color: Colors.palette.primary.main, textAlign: "center"}}>
                 <b> Our Washing Service </b> 
                </Typography>

                <Grid container spacing={2} sx={{ textAlign: 'center' }} >
          <Grid item xs={12}  sm={2} sx={{ border: '1px solid black', borderRadius: "20px", margin: "3rem"}}>
            
            <Typography variant='h6'>
          <AcUnitIcon/>
           <b>Contactless Washing </b> 
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam <br/> maiores in illum nihil aut. <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

       
          </Grid>

          <Grid item xs={12} sm={2} sx={{ border: '1px solid black',borderRadius: "20px", margin: "3rem"}}>
            
            <Typography variant='h6'>
            <img src={avtar}/> <br/>
            <b> Saftey Materials</b> 
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam <br/> maiores in illum nihil <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

       
          </Grid>


          <Grid item xs={12} sm={2}  sx={{ border: '1px solid black',borderRadius: "20px", margin: "3rem" }}>
            
            <Typography variant='h6'>
            <img src={avtar1}/> <br/>
            <b>  Modern Equipment</b>
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam  <br/>maiores in illum nihil aut. <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

        
          </Grid> 

          <Grid item xs={12} sm={2} sx={{ border: '1px solid black',borderRadius: "20px", margin: "3rem"}}>
            
            <Typography variant='h6'>
            <img src={vector3}/> <br/>
            <b>  Extensive Cleaning </b>
            </Typography>
            <Typography variant='body1' >
            Lorem ipsum dolor sit amet. At laboriosam <br/> maiores in illum nihil aut <br/> <br/>
            <Rating name="half-rating" defaultValue={2.5} precision={4} />
            </Typography>

       
          </Grid> 
 </Grid>
                </Box>
 */}







        {/* again */}


        <Box sx={{ display: { xs: "none", sm: "none", lg: "flex" } }}>
          <img src={group} />

        </Box>

        <Box sx={{ marginTop: { lg: "-26rem" } }}>
          <Typography variant="h4" sx={{ textAlign: "center", marginBlock: "2rem", color: Colors.palette.primary.main }}>
            <b> Our Washing Service</b>
          </Typography>

        </Box>

        {/* <Container sx={{ sm: "5" }}> */}
          <Grid container item spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: "30px" }}>
                <CardContent>
                  <Typography variant='h6' sx={{ textAlign: "center" }}>
                    <img src={snowfall} /> <br />
                    <b>Contactless Washing </b>
                  </Typography>
                  <Typography variant='body1' align="center" >
                    Lorem ipsum dolor sit amet. At laboriosam <br /> maiores in illum nihil aut. <br /> <br />
                    <Rating name="half-rating" defaultValue={2.5} precision={4} />
                  </Typography>


                </CardContent>
              </Card>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: "30px" }}>
                <CardContent>
                  <Typography variant='h6' sx={{ textAlign: "center" }}>
                    <img src={avtar} /> <br />
                    <b> Saftey Materials</b>
                  </Typography>
                  <Typography variant='body1' align=" center">
                    Lorem ipsum dolor sit amet. At laboriosam <br /> maiores in illum nihil aut. <br /> <br />
                    <Rating name="half-rating" defaultValue={2.5} precision={4} />
                  </Typography>


                </CardContent>
              </Card>
            </Grid>





            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: "30px", bgcolor: " #FFFFFF" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    <img src={avtar1} /> <br />
                    <b>  Modern Equipment</b>
                  </Typography>
                  <Typography variant='body1' align="center">
                    Lorem ipsum dolor sit amet. At laboriosam <br /> maiores in illum nihil aut. <br /> <br />
                    <Rating name="half-rating" defaultValue={2.5} precision={4} />
                  </Typography>


                </CardContent>
              </Card>
            </Grid>



            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: "30px", bgcolor: " #FFFFFF" }}>
                <CardContent>
                  <Typography variant='h6' sx={{ textAlign: "center" }}>
                    <img src={vector3} /> <br /> <br />
                    <b>  Extensive Cleaning </b>
                  </Typography>
                  <Typography variant='body1' align=" center" >
                    Lorem ipsum dolor sit amet. At laboriosam <br /> maiores in illum nihil aut. <br /> <br />
                    <Rating name="half-rating" defaultValue={2.5} precision={4} />
                  </Typography>


                </CardContent>
              </Card>
            </Grid>



          </Grid>
        {/* </Container> */}







        {/* Fourth line */}






        <Box sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "center", alignItems: "center", gap: "5%" }}>




          <Box >

            <img src={vector1} style={{ width: "80%", marginTop: "2rem" }} />


          </Box>








          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Typography variant='h4' sx={{ color: Colors.palette.primary.main, marginBottom: "2rem", marginBlock: "2rem" }}>
              <b> Who We Are ?</b>

            </Typography>

            <Typography>

              Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos. Eum laudantium porro aut officiis quaerat ad voluptatibus deleniti ad inventore dolorem sit optio soluta. Non officia consequatur et quod porro eum sapiente velit sit porro dolores qui culpa ratione.
            </Typography> <br /> <br />


            <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "3%" }}>


              <img src={image} />


              <b> Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum. </b>



            </Box>


          </Box>

        </Box>




      </Container> <br /> <br />
      <Question />

    </>
  );
}

export default About;