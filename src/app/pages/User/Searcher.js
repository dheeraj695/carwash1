// import React from 'react';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// // import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// // import Grid from "@mui/material/Grid";

//  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


// const Searcher = () => {
//   return (
//     <>
//     <CssBaseline />
//     <Container maxWidth="xl" sx={{ bgcolor: '#1F456E',
//              height: '10vh',
//          display: 'flex',
//          flexDirection: 'column',
//           justifyContent: 'center', 
       
//         }}>
//     <Stack spacing={2} direction={{ xs: 'column', sm: 'column' ,md:'row'}}>
//     <Button variant="contained" sx={{backgroundColor:'white',color:'black'}}>
//         Select Service Type  <ArrowDropDownIcon/>   
//      </Button> 
//     <Button variant="contained" sx={{backgroundColor:'white',color:'black'}}>
//         Select Service Type     <ArrowDropDownIcon/> 
//         </Button>
//     <Button variant="contained" sx={{backgroundColor:'white',color:'black'}}>
//         Go
//     </Button>
//     </Stack>
//     </Container>
    





    
    
  
//     </>
//   )
// }

// export default Searcher;
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Searcher() {
  return (
    <div>
     
      <Container
        maxWidth="xl"
        sx={{ bgcolor: "#1F456E", minHeight: "10vh", display: "flex", alignItems: "center" }}
      >
        <Grid container spacing={1} >
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Button variant="Text" sx={{ backgroundColor: "white", color: "black",borderRadius:'10px' }}>
              Select Service Type   <ArrowDropDownIcon/>
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Button variant="Text" sx={{ backgroundColor: "white", color: "black",borderRadius:'10px' }}>
              Select Service Type  <ArrowDropDownIcon/>
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Button variant="Text" sx={{ backgroundColor: "white", color: "black",borderRadius:'10px'}}>
              Go
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Searcher;
