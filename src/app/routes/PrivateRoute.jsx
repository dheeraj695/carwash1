import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (props) => {
  let isLoggedIn=props.isLoggedIn;
  return isLoggedIn ? <Outlet/> :<Navigate to={"/"}/>;
}

export default PrivateRoute;