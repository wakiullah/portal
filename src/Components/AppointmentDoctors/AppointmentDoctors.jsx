import React from "react";
import { useSelector } from "react-redux";

import App_Doctor from "./App_Doctor";
const AppointmentDoctors = () => {
 const doctors= useSelector(state=>state.doctors.doctors)
  const ContextDate = useSelector((state) => state.date.date);
  const allDoctorsInfo = doctors.map((doctor, index) => (
    <App_Doctor
      type={doctor.category}
      name={doctor.name}
      img={doctor.img}
      degree={doctor.education}
      key={index}
      details1={doctor.designation}
      details2={doctor.department}
      details3={doctor.hospital}
    />
  ));

  const month = ContextDate.toLocaleDateString("default", { month: "long" });
  const date = ContextDate.getDate();
  const day = ContextDate.getDay();
  const year = ContextDate.getFullYear();
  return (
    <section className="doctors__appointment mt-24">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl text-center text-cyan-500 font-medium mbb-3">{`${
            day === 5 ? "Not-" : ""
          }Available Appointments on ${month}  ${date}, ${year}`}</h1>
        </div>
        <div className="grid grid-cols-3">{allDoctorsInfo}</div>
      </div>
    </section>
  );
};
export default AppointmentDoctors;
