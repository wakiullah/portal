import React from "react";
import AppointmentDoctors from "../../Components/AppointmentDoctors/AppointmentDoctors";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

const GetDoctor = () => {
  return (
    <>
      <Banner calenderShow={true} />
      <AppointmentDoctors />
      <Footer />
    </>
  );
};
export default GetDoctor;
