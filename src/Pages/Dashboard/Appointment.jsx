import React from "react";
import Calender from "../../Components/Calender/Calender";

const AppointmentPage = () => {
  const onDateChangeHandler = (e) => {};
  return (
    <div className=" h-screen overflow-auto  w-10/12 px-6 bg-green-100">
      <div className="px-3">
        <h2 className="text-3xl mb-3 mt-3">Dashboard</h2>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2 pr-3">
          <Calender minDate={new Date()} onChange={onDateChangeHandler} />
        </div>
        <div className="w-1/2 pl-3">
          <div className="bg-white p-5 shadow-sm rounded-md ">
            <div className="flex justify-between text-cyan-500 text-lg mb-5">
              <p>Appointment</p>
              <p>23 March 2014</p>
            </div>
            <div className="text-center text-2xl">
              <p>No Appointment in this Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppointmentPage;
