import React from "react";
import DashboardMenu from "../../Components/Dashboard/Menu";

const prescription = () => {
  return (
    <section className="prescription flex justify-between">
      <DashboardMenu />
      <div className=" h-screen overflow-auto  w-10/12 px-6 bg-green-100">
        <p>Helo</p>
      </div>
    </section>
  );
};
export default prescription;
