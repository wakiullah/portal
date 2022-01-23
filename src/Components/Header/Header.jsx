import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
const Header = () => {
  const notice = useSelector((state) => state.notice.notice);
  const [isStiky, setIsStiky] = useState(true);

  let className = isStiky
    ? " bg-transparent fixed top-0 left-0 right-0 z-50"
    : " bg-white fixed top-0 left-0 right-0 z-50 shadow-md";

  const logOutHandler = () => {
    window.localStorage.removeItem("loginToken");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsStiky(false);
      } else {
        setIsStiky(true);
      }
    });
  }, []);

  const noticeClassName = notice.notice
    ? "container mx-auto flex justify-between pt-2 pb-4"
    : "container mx-auto flex justify-between py-4";

  const inLoggedIn = window.localStorage.getItem("loginToken");
  return (
    <header className={className}>
      {notice.notice && (
        <Notification notice={notice.notice} type={notice.type} />
      )}
      <div className={noticeClassName}>
        <div className="flex cursor-pointer">
          <img src={logo} alt="logo" className="w-8" />
          <NavLink to={"/"} className="text-cyan-500 mt-1 text-xl">
            Online Doctor's Portal
          </NavLink>
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink className="px-5" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="px-5 py-1" to={"/apointment"}>
                Make Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                className={`px-5 ${isStiky && "text-cyan-500"}`}
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/contact"}
                className={`px-5  ${isStiky && "text-zinc-200"}`}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              {inLoggedIn ? (
                <NavLink
                  to={"/login"}
                  className={`px-5 bg-cyan-500 py-3 rounded-lg text-white hover:bg-cyan-600`}
                >
                  LogIn
                </NavLink>
              ) : (
                <NavLink
                  onClick={logOutHandler}
                  to="/dashboard"
                  className={`px-5 bg-cyan-500 py-3 rounded-lg text-white hover:bg-cyan-600`}
                >
                  Logout
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
