import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  date: new Date(),
};

const DateContext = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const DateAction = DateContext.actions;
export default DateContext.reducer;
