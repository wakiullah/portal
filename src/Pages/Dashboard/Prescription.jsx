import React from "react";
import { useSelector } from "react-redux";
import PrescriptionDataTable from "../../Components/Dashboard/PrescriptionDataTable";
import DeseaseModal from "../../Components/Dashboard/DiseasedModal/DiseaseModal";
import PrescriptionModal from "../../Components/Dashboard/PrescriptionModal/PrescriptionModal";

const Prescription = () => {
  const deseaseModalInfo = useSelector((state) => state.modal.diseaseModal);
  const prescriptionModalInfo = useSelector(
    (state) => state.modal.prescriptionModal
  );

  return (
    <>
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
      {!!deseaseModalInfo && <DeseaseModal />}
      {!!prescriptionModalInfo && <PrescriptionModal />}
    </>
  );
};
export default Prescription;
