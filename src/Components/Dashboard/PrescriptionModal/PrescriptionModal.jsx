import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../Store/Slices/ModalContext";
import Popup from "../../PopUp/PrescriptionPopup/Popup";

const PrescriptionModal = ({ person }) => {
  const dispatch = useDispatch();
  const { pataint, doctor } = useSelector(
    (state) => state.modal.prescriptionModal
  );
  console.log(pataint, doctor);
  const closeModalHandler = () => {
    dispatch(modalActions.closePrescriptionModal());
  };

  const allTablesData =
    pataint.prescription &&
    pataint.prescription.map((prescription, index) => (
      <tr className="">
        <td className=" py-4">{index + 1}</td>
        <td className=" py-4 ">{prescription.medicine}</td>
        <td className=" py-4 ">{prescription.doge}</td>
        <td className=" py-4 ">{prescription.days}</td>
      </tr>
    ));

  const empty = <h2 className="text-center">Empty</h2>;

  return (
    <Popup isModalShow={!!pataint} setisModalShow={closeModalHandler}>
      <div className="flex justify-between">
        <p className="text-md text-cyan-500 ">{doctor.name}</p>
        <p className="text-md text-gray-500 ">{doctor.designation}</p>
        <p className="text-md text-gray-800 ">{doctor.category}</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-md text-green-500 ">{pataint.patientInfo.name}</p>
        <p className="text-md text-gray-500 ">
          Gender:{pataint.patientInfo.gender}
        </p>
        <p className="text-md text-gray-800 ">Age:{pataint.patientInfo.age}</p>
      </div>
      <div className="mt-4 max-h-60 overflow-y-scroll ">
        <table className=" w-full  text-left  ">
          <thead className="">
            <tr>
              <th>No.</th>
              <th>Medecin</th>
              <th>Doge.</th>
              <th>Days.</th>
            </tr>
          </thead>
          {pataint.prescription ? (
            <tbody className="">{allTablesData}</tbody>
          ) : (
            empty
          )}
        </table>
      </div>
      <div className="text-right  bg-white mt-2">
        <button
          className="bg-gray-600 text-white rounded-sm px-6 py-2"
          onClick={closeModalHandler}
        >
          Cancel
        </button>
      </div>
    </Popup>
  );
};
export default PrescriptionModal;
