import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notice: {},
};

const NotificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {


    setNotice(state, action) {
      state.notice = {
        type: action.payload.noticeType,
        notice: action.payload.notice,
      };
    },
  },
});

export const NoticeAction = NotificationSlice.actions;

export default NotificationSlice.reducer;
