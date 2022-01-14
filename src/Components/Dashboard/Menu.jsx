import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../images/logo.png";

const ListItem = ({ value, to }) => {
  return (
    <li>
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
            <ListItem to={"/"} value="wakiullah" />
            <ListItem to={"/dashboard"} value="Dashboard" />
            <ListItem to={"/dashboard/appointments"} value="Appointment" />
            <ListItem to={"/dashboard/prescription"} value="Prescription" />
            <ListItem to={"/dashboard/add-doctor"} value="Add Doctor" />
          </ul>
        </div>
        <div>
          <ul>
            <ListItem to={"/logout"} value="Logout" />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DashboardMenu;
