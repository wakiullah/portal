import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppointmentDataTable from "../../Components/Dashboard/AppointmentDataTable";
import Calculates from "../../Components/Dashboard/Calculates";
import DashboardMenu from "../../Components/Dashboard/Menu";
import { NoticeAction } from "../../Store/Slices/NotificationContext";
import { PatientActions } from "../../Store/Slices/PatientsContext";

const Dashboard = () => {
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
      <div className="mainDashboard h-screen overflow-auto  w-10/12 px-6 bg-green-100">
        <div className="px-3">
          <h2 className="text-3xl mb-3 mt-3">Dashboard</h2>
        </div>
        <div className="flex justify-between">
          <Calculates className="bg-cyan-500" />
          <Calculates className="bg-gray-700" />
          <Calculates className="bg-orange-500" />
          <Calculates className="bg-red-800" />
        </div>
        <div className="bg-slate-50 rounded-md pt-4 mt-4">
          <div className="flex px-40 mt-5 mb-5 justify-between">
            <div>
              <p className="text-cyan-600 text-lg">Recent Appointment</p>
            </div>
            <div className="">
              <select
                desabled
                className="rounded-sm px-3 py-2 text-lg bg-gray-400"
                id=""
              >
                <option value="">Month</option>
                <option value="">Week</option>
                <option value="">Year</option>
              </select>
            </div>
          </div>
          <AppointmentDataTable />
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
