import React from "react";
import Banner from "../../Components/Banner/Banner";
import Info from "../../Components/Infos/Info";
import Services from "../../Components/Services/Services";
import Appointment from "../../Components/APPOINTMENT/Appointment";
import Doctors from "../../Components/Doctors/Doctors";
import Features from "../../Components/Features/Features";
import Testmonial from "../../Components/Testmonial/Testmonial";
import FeatureServices from "../../Components/Feature-services/Feature-services";
import Blog from "../../Components/Blog/Blog";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Banner calenderShow={false} />
      <Info />
      <Services />
      <Appointment />
      <Doctors />
      <Features />
      <Testmonial />
      <FeatureServices />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
