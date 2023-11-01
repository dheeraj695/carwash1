
// import React from 'react';
// import {
//     Container,
//     Grid,
//     Paper,
//     TextField,
//     Button,
//     Typography,
//     Box,
//     colors,
// } from '@mui/material';
// import Colors from "../utils/Colors";
// import LockIcon from '@mui/icons-material/Lock';
// import car1 from "../../app/assets/Image/car1guest.png";
// import { Link } from 'react-router-dom';


// function Loginpage() {
//     const paperStyle = {
//         padding: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100%',


//     };

//     const formStyle = {
//         width: '100%', 
//         marginTop: '10%',
//     };

//     const submitButtonStyle = {
//         margin: '20px 0',
//         width: '150px', 
//         borderRadius: '10px', 
        
//         display: 'block', 
//         textAlign: 'center',
//         marginTop: "5%",
//         marginLeft: { xs: "20%", sm: "30%" }
//     };
//     const img = {
//         backgroundImage: `url(${car1})`,
//         backgroundPosition: 'center', 
//         backgroundSize: 'cover',      



//     };

//     return (
//         <Box
//             sx={{
//                 backgroundImage: 'url("your-background-image-url.jpg")',
//                 backgroundColor: '#023159',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}
//         >
//             <Container component="main" maxWidth="xs">
//                 <Grid container style={img}>
//                     <Paper elevation={3} style={paperStyle} >
//                         <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
//                             <b>{"<"}Log in</b>
//                         </Button>
//                         <Typography variant="h6" sx={{ fontSize: "40px", color: Colors.palette.primary.main }}>LogIn</Typography>
//                         <form style={formStyle} noValidate>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={12}>
//                                     <TextField
//                                         variant="outlined"
//                                         required
//                                         fullWidth
//                                         id="username"
//                                         label="Username/Email "
//                                         name="username"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={12}>
//                                     <TextField
//                                         variant="outlined"
//                                         required
//                                         fullWidth
//                                         id="password"
//                                         label="Password"
//                                         name="password"
//                                     />
//                                 </Grid>
//                             </Grid>

//                             <Typography sx={{ color: "#013C6B", display: "flex", mt: "1rem" }}>
//                                 <LockIcon sx={{ marginRight: "10px" }} />
//                                 Forgot Password ?
//                             </Typography>
//                             <Box align="center">

//                                 <Button

//                                     type="submit"
//                                     fullWidth
//                                     variant="contained"

//                                     style={{ ...submitButtonStyle, backgroundColor: Colors.palette.primary.main }}
//                                 >
//                                     Login
//                                 </Button>
//                             </Box>

//                             <Box align="center">
//                                 <Typography sx={{ color: Colors.palette.primary.main }}>
//                                     Don't have an account ?  <span style={{ color: "#0061AE" }}>
//                                   <Link to="/Register" style={{ color: "#0061AE" ,textDecoration: 'none'}}>Register here</Link>      
//                                     </span>
//                                 </Typography>
//                             </Box>

//                         </form>
//                     </Paper>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }

// export default Loginpage;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Container,
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
    colors,
} from '@mui/material';
import Colors from "../utils/Colors";
import LockIcon from '@mui/icons-material/Lock';
import car1 from "../../app/assets/Image/car1guest.png";
import { Link } from 'react-router-dom';

function Loginpage(Props) {
    let setIsLoggedIn =Props.setIsLoggedIn;
    const paperStyle = {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    };

    const formStyle = {
        width: '100%', 
        marginTop: '10%',
    };

    const submitButtonStyle = {
        margin: '20px 0',
        width: '150px', 
        borderRadius: '10px', 
        display: 'block', 
        textAlign: 'center',
        marginTop: "5%",
        marginLeft: { xs: "20%", sm: "30%" }
    };

    const img = {
        backgroundImage: `url(${car1})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
    };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required('Username/Email is required'),
        password: Yup.string().required('Password is required'),
    });

    // Formik instance
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
       onSubmit: (values, { resetForm,setSubmitting }) => {
            //Prevent the default form submission
         

           // Handle form submission here (e.g., send to server for authentication)
           console.log(values);
           setIsLoggedIn(true);

         //s   Reset the form after submission
           resetForm();
           
       },
    });

    return (
        <Box
            sx={{
                backgroundImage: 'url("your-background-image-url.jpg")',
                backgroundColor: '#023159',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container component="main" maxWidth="xs">
                <Grid container style={img}>
                    <Paper elevation={3} style={paperStyle} >
                        <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
                            <b>{"<"}Log in</b>
                        </Button>
                        <Typography variant="h6" sx={{ fontSize: "40px", color: Colors.palette.primary.main }}>LogIn</Typography>
                        <form style={formStyle} onSubmit={formik.handleSubmit} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username/Email"
                                        name="username"
                                        {...formik.getFieldProps('username')}
                                    />
                                    {formik.touched.username && formik.errors.username && (
                                        <div className="error">{formik.errors.username}</div>
                                    )}
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        {...formik.getFieldProps('password')}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <div className="error">{formik.errors.password}</div>
                                    )}
                                </Grid>
                            </Grid>

                            <Typography sx={{ color: "#013C6B", display: "flex", mt: "1rem" }}>
                                <LockIcon sx={{ marginRight: "10px" }} />
                                Forgot Password ?
                            </Typography>
                            <Box align="center">
                           
                           
                               <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ ...submitButtonStyle, backgroundColor: Colors.palette.primary.main }}

                                >
                                Login   
                                </Button>
                           
                            </Box>

                            <Box align="center">
                                <Typography sx={{ color: Colors.palette.primary.main }}>
                                    Don't have an account? <span style={{ color: "#0061AE" }}>
                                        <Link to="/Register" style={{ color: "#0061AE", textDecoration: 'none' }}>Register here</Link>
                                    </span>
                                </Typography>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </Box>
    );
}

export default Loginpage;

