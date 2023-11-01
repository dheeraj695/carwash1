import React from 'react';
import { Container, Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import car1 from '../../assets/Image/car1guest.png';

function RegisterPage(Props) {
  let setIsLoggedIn =Props.setIsLoggedIn;
  const initialValues = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    alternateNumber: '',
    email: '',
    locality: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    locality: Yup.string().required('Locality is required'),
    city: Yup.string().required('City/Town is required'),
    district: Yup.string().required('District is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pincode is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log('Form Data:', values);
    setIsLoggedIn(true);

    // Reset the form after submission
    resetForm();
  };

  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  const img = {
    backgroundImage: `url(${car1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const formStyle = {
    width: '100%', // Full width
    marginTop: '10%',
  };

  const submitButtonStyle = {
    margin: '20px 0',
    width: '150px', // Adjust the width as needed
    borderRadius: '10px', // Adjust the border radius as needed
    display: 'block', // Ensure the button takes up the full width of its container
    textAlign: 'center',
    marginTop: '5%',
    marginLeft: '30%',
  };

  return (
    <Box
      sx={{
        //backgroundImage: `url(${car1})`,
        backgroundColor: '#023159',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Grid container style={img}>
          <Paper elevation={3} style={paperStyle}>
            <Button sx={{ marginLeft: '-80%', fontSize: '800' }}>
              <Link to="/Login" style={{ color: '#0061AE', textDecoration: 'none' }}>
                <b>{'<'}Log in</b>
              </Link>
            </Button>
            <Typography variant="h6">Enter your credentials here:</Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form style={formStyle} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                    />
                    <ErrorMessage name="firstName" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                    />
                    <ErrorMessage name="lastName" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="contactNumber"
                      label="Contact Number"
                      name="contactNumber"
                    />
                    <ErrorMessage name="contactNumber" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="alternateNumber"
                      label="Alternate Number"
                      name="alternateNumber"
                    />
                    <ErrorMessage name="alternateNumber" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4">Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="locality"
                      label="Locality / Building / Street / Society"
                      name="locality"
                    />
                    <ErrorMessage name="locality" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="city"
                      label="City / Town District"
                      name="city"
                    />
                    <ErrorMessage name="city" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="district"
                      label="District"
                      name="district"
                    />
                    <ErrorMessage name="district" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                    />
                    <ErrorMessage name="state" component="div" className="error" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="pincode"
                      label="Pincode"
                      name="pincode"
                    />
                    <ErrorMessage name="pincode" component="div" className="error" />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={submitButtonStyle}
                >
                  Submit
                </Button>
              </Form>
            </Formik>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default RegisterPage;
