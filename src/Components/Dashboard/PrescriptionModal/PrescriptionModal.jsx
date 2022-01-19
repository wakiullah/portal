import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../Store/Slices/ModalContext";
import Popup from "../../PopUp/PrescriptionPopup/Popup";

const PrescriptionModal = ({ person }) => {
  const dispatch = useDispatch();
  const { pataint, doctor } = useSelector((state) => state.modal.prescriptionModal);

  const closeModalHandler = () => {
    dispatch(modalActions.closePrescriptionModal());
  };

  return (
    <Popup isModalShow={!!pataint} setisModalShow={closeModalHandler}>
      <div className="flex justify-between">
        <p className="text-xl text-cyan-500 ">{doctor.name}</p>
        <p className="text-xl text-gray-500 ">{doctor.designation}</p>
        <p className="text-xl text-gray-800 ">{doctor.category}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-xl text-cyan-500 ">{pataint.patientInfo.name}</p>
        <p className="text-xl text-gray-500 ">{doctor.designation}</p>
        <p className="text-xl text-gray-800 ">{doctor.category}</p>
      </div>
      <div className="text-right  bg-white mt-2">
        <button
          className="bg-gray-600 text-white rounded-sm px-6 py-2"
          onClick={closeModalHandler}
        >
          Cancel
        </button>
        <button className=" bg-sky-600 text-white rounded-sm ml-3 px-6 py-2">
          Update
        </button>
      </div>
    </Popup>
  );
};
export default PrescriptionModal;
