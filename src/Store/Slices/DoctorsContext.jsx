import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
};
const DoctorsSlices = createSlice({
  name: "Patient",
  initialState,
  reducers: {
    setDoctors(state, actions) {
      state.doctors = actions.payload;
    },
  },
});

export const doctorsActions = DoctorsSlices.actions;

export default DoctorsSlices.reducer;
