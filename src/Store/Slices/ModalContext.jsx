import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "Modal Slice",
  initialState: { isShow: false },
  reducers: {
    showModal(state, action) {
      state.isShow = true;
      console.log('hiii');
    },
    closeModal(state, action) {
      state.isShow = false;
    },
  },
});
export const modalActions = ModalSlice.actions;

export default ModalSlice.reducer;
