import React from "react";
import Preload from "../../images/Preloader.gif";

const Preloader = () => {
  return (
    <div className="w-full flex justify-center mb-6 pb-6">
      <img src={Preload} className="" alt="Loading..." />
    </div>
  );
};
export default Preloader;
