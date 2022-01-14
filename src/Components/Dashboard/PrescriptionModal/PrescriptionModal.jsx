import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../Store/Slices/ModalContext";
import Popup from "../../PopUp/Popup/PopUp";

const PrescriptionModal = ({ person }) => {
  const dispatch= useDispatch();
  const showModal = useSelector((state) => state.modal.isShow);

  const closeModalHandler = () => {
   dispatch( modalActions.closeModal())
  };

  return (
    <Popup isModalShow={showModal} setisModalShow={closeModalHandler}>
      {/* <h2>{person.patientInfo.name}</h2> */}
      <p>Appointment To</p>
      <h1>Hello World</h1>
    </Popup>
  );
};
export default PrescriptionModal;
