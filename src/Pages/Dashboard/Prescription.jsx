import React from "react";
import DashboardMenu from "../../Components/Dashboard/Menu";
import PrescriptionDataTable from "../../Components/Dashboard/PrescriptionDataTable";
import PrescriptionModal from "../../Components/Dashboard/PrescriptionModal/PrescriptionModal";
import Popup from "../../Components/PopUp/Popup/PopUp";

const Prescription = () => {
  return (
    <section className="prescription flex justify-between">
      <DashboardMenu />
      <div className=" h-screen overflow-auto  w-10/12 px-6 bg-green-100">
        <div className="py-6 text-2xl ">
          <h2>Prescription</h2>
        </div>
        <div className="bg-white p-3 rounded-md">
          <div className="flex px-40 mt-5 mb-7 justify-between">
            <div>
              <p className="text-cyan-600 text-lg">Recent Prescription</p>
            </div>
            <div className="">
              <select
                desabled
                className="rounded-sm px-3 py-2 text-lg bg-gray-400"
                id=""
              >
                <option value="">Month</option>
                <option value="">Week</option>
                <option value="">Year</option>
              </select>
            </div>
          </div>
          <PrescriptionDataTable />
        </div>
      </div>
      {/* <PrescriptionModal /> */}
    </section>
  );
};
export default Prescription;
