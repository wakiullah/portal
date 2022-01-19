import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../Store/Slices/ModalContext";
import Popup from "../../PopUp/PrescriptionPopup/Popup";

const DiseaseModal = ({ person }) => {
  const dispatch = useDispatch();
  const { pataint, doctor } = useSelector((state) => state.modal.diseaseModal);
  console.log(pataint, doctor);
  const closeModalHandler = () => {
    dispatch(modalActions.closeDiseaseModal());
  };

  return (
    <Popup isModalShow={!!pataint} setisModalShow={closeModalHandler}>
      <div className="text-center">
        <h2 className=" text-2xl text-cyan-500 font-normal">
          {pataint.patientInfo.name}'s disiase
        </h2>
        <p>Appointment To</p>
        <h1 className="text-green-500 text-xl ">{doctor.name}</h1>
        <p className="text-gray-600">{doctor.category}</p>
        <textarea
          value={pataint.disease}
          className="mt-6 p-2 w-full border-2 rounded-md"
        ></textarea>
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
export default DiseaseModal;
