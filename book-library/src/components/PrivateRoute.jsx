import React from "react";
import { Navigate } from "react-router-dom";
export const  PrivateRoute = ({Component})=>{
    const isAuthenticated = true;
    return isAuthenticated? Component : <Navigate to="/"/>
};