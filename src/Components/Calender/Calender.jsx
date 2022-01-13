import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
const Calender = ({ minDate, maxDate, onChange }) => {
  return <Calendar minDate={minDate} maxDate={maxDate} onChange={onChange} />;
};
export default Calender;
