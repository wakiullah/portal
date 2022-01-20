import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import ContactPage from "./Pages/Contact/Contact";
import AppointmentPage from "./Pages/Dashboard/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MainDashboard from "./Pages/Dashboard/MainDashboard";
import Prescription from "./Pages/Dashboard/Prescription";
import GetDoctor from "./Pages/GetDoctor/GetDoctor";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import { useDispatch } from "react-redux";
import { NoticeAction } from "./Store/Slices/NotificationContext";
import { doctorsActions } from "./Store/Slices/DoctorsContext";
export default function App() {
  let a = useLocation().pathname.slice(0, 10);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://online-doctors-portal.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        dispatch(doctorsActions.setDoctors(data));
      })
      .catch((err) => {
        dispatch(
          NoticeAction.setNotice({ noticeType: "error", notice: err.message })
        );
      });
  }, [dispatch]);

  return (
    <>
      {a !== "/dashboard" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/apointment" element={<GetDoctor />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard/*" element={<MainDashboard />} />
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/dashboard" />}
        />
      </Routes>
    </>
  );
}
