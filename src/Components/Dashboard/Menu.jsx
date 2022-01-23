import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Icon from "../../images/logo.png";
import { LoginActions } from "../../Store/Slices/LoginContext";

const ListItem = ({ value, to, onClick }) => {
  return (
    <li onClick={onClick}>
      <NavLink
        className="py-3 cursor-pointer block pl-7 hover:bg-cyan-500 hover:pl-9 transition-all duration-200"
        to={to}
      >
        {value}
      </NavLink>
    </li>
  );
};

const DashboardMenu = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(LoginActions.logOutHandler());
    window.localStorage.clear();
  };
  return (
    <div className="dashboardMenu bg-cyan-400 text-zinc-50 w-2/12 h-screen py-10">
      <div className="flex h-full justify-between bg-cyan-400 flex-col ">
        <div>
          <ul>
            <li className="mb-5 pl-4">
              <NavLink className="flex cursor-pointer" to="/">
                <img src={Icon} alt="" className="h-8 w-8 mt-4 mr-1" />
                <p className="text-xl mt-1">Online Doctors Portal</p>
              </NavLink>
            </li>
            <ListItem to={"/"} value="Home" />
            <ListItem to={"/dashboard/dashboard"} value="Dashboard" />
            <ListItem to={"/dashboard/appointment"} value="Appointment" />
            <ListItem to={"/dashboard/prescription"} value="Prescription" />
            <ListItem to={"/dashboard/add-doctor"} value="Add Doctor" />
          </ul>
        </div>
        <div>
          <ul>
            <ListItem value="Logout" onClick={logoutHandler} to={"/"} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DashboardMenu;
