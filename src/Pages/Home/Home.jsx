import React, { useEffect } from "react";
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
import { doctorsActions } from "../../Store/Slices/DoctorsContext";
import { NoticeAction } from "../../Store/Slices/NotificationContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Home = () => {
  const doctors = useSelector((state) => state.doctors.doctors);
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
    <div>
      <Banner calenderShow={false} />
      <Info />
      <Services />
      <Appointment />
      <Doctors doctors={doctors.slice(0, 3)} />
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
