import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import ContactPage from "./Pages/Contact/Contact";
import MainDashboard from "./Pages/Dashboard/MainDashboard";
import GetDoctor from "./Pages/GetDoctor/GetDoctor";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { NoticeAction } from "./Store/Slices/NotificationContext";
import { doctorsActions } from "./Store/Slices/DoctorsContext";
import CommingSoon from "./Pages/CommingSoon/CommingSoon";

export default function App() {
  let pathname = useLocation().pathname.slice(0, 10);
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notice.notice.notice);
  if (notification) {
    setTimeout(() => dispatch(NoticeAction.clearNotice()), [5000]);
  }

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
  let { token, isLogin } = useSelector((state) => state.login);

  return (
    <>
      {pathname !== "/dashboard" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apointment" element={<GetDoctor />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="dashboard/*"
          element={isLogin ? <MainDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/dashboard/dashboard" /> : <LogIn />}
        />
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/dashboard" />}
        />
        <Route path="/*" element={<CommingSoon />} />
      </Routes>
    </>
  );
}
