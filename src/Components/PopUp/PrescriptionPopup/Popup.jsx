import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const Popup = ({ children, isModalShow, setisModalShow }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          className="w-1/2  absolute top-1/2 left-1/2 opacity-100 -translate-x-1/2 p-6 -translate-y-1/2 z-50 bg-white"
          isOpen={isModalShow}
          overlayClassName="Overlay bg-black bg-opacity-75 w-screen h-screen fixed top-0 left-0 z-30"
          shouldCloseOnOverlayClick={true}
          onRequestClose={setisModalShow}
          ariaHideApp={false}
        >
          {children}
        </Modal>,
        document.getElementById("popup")
      )}
    </>
  );
  // Modal.setAppElement(window.document.body);
};
export default Popup;
