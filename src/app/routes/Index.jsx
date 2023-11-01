import React, { useState } from 'react'
import Colors from '../utils/Colors'
import { Link, Route, Routes } from "react-router-dom";
import GuestFirst from "../pages/User/Guest/GuestFirst"
import ButtonAppBar from '../partials/AppBar';
import RegisterPage from '../pages/User/Register';
import ServiceLocation from '../pages/User/ServiceLocation';
import Loginpage from '../pages/Loginpage';

import About from '../pages/User/About';
import Contactus from '../pages/User/Guest/Contact_Us';
import Footer from '../partials/Footer';
import Guest2 from '../pages/Guest2';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/User/Guest/Profile';
import Loginpage12 from "../pages/Private_Pages/LoginPage"
const Index = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <>
      {/* Authecation routing */}

        <ButtonAppBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
        {/* ===========Guest Routing=============== */}
        {/* pages */}
        <Route path="/" element={<GuestFirst />}></Route>
        <Route path="/services" element={<Guest2/>}></Route>
        <Route path="/About_Us" element={<About />}></Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
        {/* ==== */}
        <Route path="/Register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/ServiceLocation" element={<ServiceLocation/>}></Route>
        <Route path="/Login" element={<Loginpage12 setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/user' element={<PrivateRoute isLoggedIn={isLoggedIn}/>}>
          <Route path='profile' element={<Profile/>}/>
        </Route>
        
        </Routes>
        <Footer/>
    </>
  )
}

export default Index