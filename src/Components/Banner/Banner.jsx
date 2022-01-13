import { NavLink } from "react-router-dom";
import Calendar from "../Calender/Calender";
import bannerImg from "../../images/banner-img.jpg";
import "./Banner.css";
import { DateAction } from "../../Store/Slices/DateContext";
import { useDispatch } from "react-redux";

const Banner = ({ calenderShow }) => {
  const dispatch = useDispatch();
  const calenderChangeHandler = (e) => {
    dispatch(DateAction.setDate(e));
  };

  return (
    <section className="bg bg-no-repeat bg-cover relative">
      <div className="container mx-auto grid grid-cols-11 items-center h-screen z-10">
        <div className="col-span-5">
          {!calenderShow && (
            <>
              <h2 className="text-4xl font-medium leading-10 text-gray-700 mb-5">
                Doctors <br /> Chamber on <br /> Video Call
              </h2>
              <p className="text-lg text-gray-800 mb-7 leading-7 w-3/4">
                Book video call appointments with the country's most qualified
                specialist doctors, in their private chambers.
              </p>
              <button type="button">
                <NavLink
                  to={"/"}
                  className="px-8 py-4 rounded-md bg-cyan-500 hover:bg-cyan-700 text-zinc-100"
                >
                  Make Appointment
                </NavLink>
              </button>
            </>
          )}
          {calenderShow && (
            <div className="px-10">
              <Calendar minDate={new Date()} onChange={calenderChangeHandler} />
            </div>
          )}
        </div>
        <div className="col-span-6">
          <img className="rounded-xl" src={bannerImg} alt="" />
        </div>
      </div>
      <div className="absolute top-0 right-0 bg-gray-600 w-3/12 h-screen  -z-10"></div>
    </section>
  );
};
export default Banner;
