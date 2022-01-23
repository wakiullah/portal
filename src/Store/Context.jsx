import { configureStore } from "@reduxjs/toolkit";
import NotificationContext from "./Slices/NotificationContext";
import DateContext from "./Slices/DateContext";
import PatientSlices from "./Slices/PatientsContext";
import ModalContext from "./Slices/ModalContext";
import DoctorsContext from "./Slices/DoctorsContext";
import LoginContext from "./Slices/LoginContext";

const store = configureStore({
  reducer: {
    notice: NotificationContext,
    date: DateContext,
    patient: PatientSlices,
    modal: ModalContext,
    doctors: DoctorsContext,
    login: LoginContext,
  },
});

export default store;
