import { configureStore } from "@reduxjs/toolkit";
import NotificationContext from "./Slices/NotificationContext";
import DateContext from "./Slices/DateContext";
import PatientSlices from "./Slices/PatientsContext";
const store = configureStore({
  reducer: {
    notice: NotificationContext,
    date: DateContext,
    patient: PatientSlices,
  },
});

export default store;
