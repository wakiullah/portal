import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../Store/Slices/ModalContext";
import Preloader from "../Preloader/Preloader";

const PrescriptionDataTable = () => {
  const dispatch = useDispatch();
  const allPataintData = useSelector((state) => state.patient.pataints);
  const doctorsData = useSelector((state) => state.doctors.doctors);

  const showModalHandler = (pataintInfo) => {
    const pataintsDoc = doctorsData.find((doc) => doc.id === pataintInfo.apId);
    dispatch(
      modalActions.showDiseaseModal({
        pataint: pataintInfo,
        doctor: pataintsDoc,
      })
    );
  };

  const paid = (
    <p className="inline-block bg-green-700 text-white px-3 py-1 rounded-md">
      Paid
    </p>
  );
  const notPaid = <p className="inline-block  text-red-700">Not Paid</p>;

  const statusClassPending = "bg-gray-400";
  const statusClassApproved = "bg-green-400";

  const allTables =
    allPataintData &&
    allPataintData.map((patient, index) => (
      <tr className="">
        <td className=" py-4">{index + 1}</td>
        <td className=" py-4">{patient.date}</td>
        <td className=" py-4">{patient.time}</td>
        <td className=" py-4">{patient.patientInfo.name}</td>
        <td className=" py-4 ">#{patient._id.slice(-7)}</td>
        <td className=" py-4 ">{patient.visitingStatus}</td>
        <td className=" py-4 uppercase ">
          <p
            onClick={() => showModalHandler(patient)}
            className="inline-block px-3 py-2 cursor-pointer bg-green-500 text-white rounded"
          >
            View
          </p>
        </td>
        <td className=" py-4 uppercase text-center">
          <p className="inline-block px-3 py-2 cursor-pointer bg-green-500 text-white rounded">
            View
          </p>
        </td>
      </tr>
    ));

  return (
    <div className="w-full  ">
      {allPataintData.length > 0 ? (
        <div className="px-4">
          <table className=" w-full  text-left  ">
            <thead className="">
              <tr>
                <th>No.</th>
                <th>Date.</th>
                <th>Time.</th>
                <th>Name.</th>
                <th>Appointment</th>
                <th>Status</th>
                <th>Disease</th>
                <th>Prescription</th>
              </tr>
            </thead>
            <tbody className="">{allTables}</tbody>
          </table>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
export default PrescriptionDataTable;
