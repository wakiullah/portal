import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pataints: [],
};
const PatientSlices = createSlice({
  name: "Patient",
  initialState,
  reducers: {
    setPataints(state, actions) {
      state.pataints = actions.payload;
      console.log(actions.payload);
    },
  },
});

export const PatientActions = PatientSlices.actions;

export default PatientSlices.reducer;
