import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";
import MainDashboard from "../Pages/Dashboard/MainDashboard";

const PrivetOutlet = ({ isLoggedin }) => {
  let a = useParams();
  console.log(a);
  return isLoggedin ? <MainDashboard /> : <Navigate to="/login" />;
};

export default PrivetOutlet;
