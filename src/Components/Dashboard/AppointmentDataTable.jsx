import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";

const AppointmentDataTable = () => {
  const allPataintData = useSelector((state) => state.patient.pataints);

  console.log(allPataintData.length);

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
    allPataintData.map((patient,index) => (
      <tr className="">
        <td className=" py-4">{index+1}</td>
        <td className=" py-4">{patient.date}</td>
        <td className=" py-4">{patient.time}</td>
        <td className=" py-4">{patient.patientInfo.name}</td>
        <td className=" py-4 text-center">
          {patient.paymentID ? paid : notPaid}
        </td>
        <td className=" py-4 ">
          <p className="hover:underline">Link</p>
        </td>
        <td className=" py-4">
          <div className="">
            <select
              className={`rounded-sm px-3 py-2 text-lg ${
                patient.status !== "Approved"
                  ? statusClassPending
                  : statusClassApproved
              } `}
              id=""
            >
              <option
                className="rounded-sm px-3 py-2"
                selected={patient.status === "Pending"}
                value=""
              >
                Pending
              </option>
              <option
                className="rounded-sm px-3 py-2"
                selected={patient.status === "Approved"}
                value=""
              >
                Approved
              </option>
            </select>
          </div>
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
                <th>Payment Status.</th>
                <th>Meeting Link.</th>
                <th>Action.</th>
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
export default AppointmentDataTable;
