import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({children, user, redirect = '/login'}) => {
    if(!user) return <Navigate to = {redirect} />;
  return children ? children : <Outlet/>; // Outlet get access to the element that matches url.
}

export default ProtectRoute;