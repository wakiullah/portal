import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { NoticeAction } from "../../Store/Slices/NotificationContext";
import { PatientActions } from "../../Store/Slices/PatientsContext";
import DashboardMenu from "../../Components/Dashboard/Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AppointmentPage from "./Appointment";
import Prescription from "./Prescription";
import CommingSoon from "../CommingSoon/CommingSoon";

const MainDashboard = () => {
  const dispath = useDispatch();

  useEffect(() => {
    const fetchPataintData = async () => {
      const getPataintsInfo = async () => {
        const response = await fetch(
          "https://online-doctors-portal.herokuapp.com/bookedAppointments"
        );
        if (!response.ok) {
          dispath(
            NoticeAction.setNotice({
              notice: "Faild To Fetch!",
              noticeType: "error",
            })
          );
          return;
        }
        const data = await response.json();
        return data;
      };

      const pataintData = await getPataintsInfo();

      dispath(PatientActions.setPataints(pataintData));
    };

    fetchPataintData();
    return () => {
      fetchPataintData();
    };
  }, [dispath]);
  return (
    <section className="flex justify-between">
      <DashboardMenu />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/add-doctor" element={<CommingSoon />} />
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/dashboard" />}
        />
      </Routes>
    </section>
  );
};
export default MainDashboard;
