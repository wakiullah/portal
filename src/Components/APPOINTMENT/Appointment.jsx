import React from "react";
import { NavLink } from "react-router-dom";
import doctorsPhoto from "../../images/ap-banner.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section className="appointment-banner mt-28">
      <div className="appointment-bg">
        <div className="conteiner mx-auto flex">
          <div className="w-5/12">
            <img className="w-11/12 -mt-28" src={doctorsPhoto} alt="" />
          </div>
          <div className="w-7/12 py-10 pr-12 mt-3">
            <h4 className="text-xl text-cyan-500 mb-6">APPOINTMENT</h4>
            <h2 className="text-4xl text-white font-medium">
              Make an Appointment Today
            </h2>
            <p className="leading-9 text-white mb-12">
              You will now get all kinds of health related services for your day
              to day life through an app. Ranging from primary health care for
              your illness to specialist doctors’ consultation or referrals for
              hospital admission.
            </p>
            <NavLink
              to="/"
              className="py-4 px-10 rounded-md text-white cursor-pointer bg-cyan-700"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Appointment;
