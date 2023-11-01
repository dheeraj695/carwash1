
// import React, { useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Container } from '@mui/material';
// import Colors from '../utils/Colors';
// import DrawerComp from './Drawer';

// export default function ButtonAppBar() {
//   const [value, setValue] = useState();

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//     {/* app bar */}
//       <AppBar position="static" sx={{ background: Colors.palette.background.default }}>
//         <Toolbar>
//         {/* hello */}
//           <DrawerComp />
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "2%", cursor:'pointer'}}>
//             Logo
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap:{md:'50px',xl:"100px",sm:"25px"},display:{xs:"none",sm:"flex"}  }}>
//             <Button  color="inherit">Services</Button>
//             <Button color="inherit">About Us</Button>
//             <Button color="inherit">Contact Us</Button>
//             <Button
//             sx={{
//                 backgroundColor: 'red',
//                 color: 'white',
//                 cursor: 'pointer', // Change cursor to pointer on hover
//                 '&:hover': {
//                   backgroundColor: 'white', // Change background color on hover
//                   color: 'red', // Change text color on hover
//                 },
//               }}
            
//             >Login</Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Colors from '../utils/Colors';
import DrawerComp from './Drawer';

export default function ButtonAppBar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  const location = useLocation();
  const [logoClicked, setLogoClicked] = useState(false);

  const handleLogoClick = () => {
    setLogoClicked(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: Colors.palette.background.default }}>
        <Toolbar>
          <DrawerComp />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            onClick={handleLogoClick}
            sx={{
              flexGrow: 1,
              marginLeft: "2%",
              cursor: 'pointer',
              textDecoration: 'none',
              color: location.pathname === "/" ? 'bold' : 'White',
              borderBottom: location.pathname === "/" ? '2px solid transparent' : '2px solid #002C4F',
              '&:hover': {
                borderBottom: '2px solid transparent',
              },
            }}
          >
            Logo
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { md: '50px', xl: "100px", sm: "25px" }, display: { xs: "none", sm: "flex" } }}>
            <Button
              color="inherit"
              component={Link}
              to="/services"
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: location.pathname === "/services" ? 'white' : 'transparent',
                  color: location.pathname === "/services" ? '#002C4F' : 'inherit',
                },
                backgroundColor: location.pathname === "/services" ? 'white' : 'transparent',
                color: location.pathname === "/services" ? '#002C4F' : 'inherit',
                transform: location.pathname === "/services" ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.2s',
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/About_Us"
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: location.pathname === "/About_Us" ? 'white' : 'transparent',
                  color: location.pathname === "/About_Us" ? '#002C4F' : 'inherit',
                },
                backgroundColor: location.pathname === "/About_Us" ? 'white' : 'transparent',
                color: location.pathname === "/About_Us" ? '#002C4F' : 'inherit',
                transform: location.pathname === "/About_Us" ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.2s',
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/Contactus"
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: location.pathname === "/Contactus" ? 'white' : 'transparent',
                  color: location.pathname === "/Contactus" ? '#002C4F' : 'inherit',
                },
                backgroundColor: location.pathname === "/Contactus" ? 'white' : 'transparent',
                color: location.pathname === "/Contactus" ? '#002C4F' : 'inherit',
                transform: location.pathname === "/Contactus" ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.2s',
              }}
            >
              Contact Us
            </Button>
            {  !isLoggedIn && (
               <Button
            component={Link}
              to="/Login"
              sx={{
                backgroundColor: 'red',
                color: 'white',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'red',
                },
              }}
            >
              Login 
            </Button>
            )
            }
           
            {
              isLoggedIn &&(
                <Button
            component={Link}
              to="/user/profile"
              sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'red',
                },
              }}
            >
             Profile
            </Button>
              )
            }
           
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
