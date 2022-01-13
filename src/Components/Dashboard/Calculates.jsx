import React from "react";

const Calculates = ({ className }) => {
  return (
    <div className={`px-3 rounded-md text-white flex justify-between mx-3 ${className}`}>
      <div className="flex items-center">
        <h2 className="text-5xl">144</h2>
      </div>
      <div ><p className="text-lg py-3 ml-1 ">total Appointments</p></div>
    </div>
  );
};
export default Calculates;
