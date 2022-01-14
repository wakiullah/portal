import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import ContactPage from "./Pages/Contact/Contact";
import AppointmentPage from "./Pages/Dashboard/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Prescription from "./Pages/Dashboard/Prescription";
import GetDoctor from "./Pages/GetDoctor/GetDoctor";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
export default function App() {
  let a = useLocation().pathname.slice(0, 10);
  return (
    <>
      {a !== "/dashboard" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/apointment" element={<GetDoctor />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/appointments" element={<AppointmentPage />} />
        <Route path="/dashboard/prescription" element={<Prescription />} />
      </Routes>
    </>
  );
}
