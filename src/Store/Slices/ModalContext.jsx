import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "Modal Slice",
  initialState: { prescriptionModal: null, diseaseModal: null },
  reducers: {
    showPrescriptionModal(state, action) {
      state.prescriptionModal = action.payload;
 
    },
    closePrescriptionModal(state, action) {
      state.prescriptionModal = null;
    },
    showDiseaseModal(state, action) {
      state.diseaseModal = action.payload;
    },
    closeDiseaseModal(state, action) {
      state.diseaseModal = null;
    },
  },
});
export const modalActions = ModalSlice.actions;

export default ModalSlice.reducer;
