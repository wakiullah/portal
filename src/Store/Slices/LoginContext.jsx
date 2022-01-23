import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageData = () => {
  const token = localStorage.getItem("loginToken");
  return token;
};
const token = getLocalStorageData();

const initialState = { token: token, isLogin: !!token };

const LoginContext = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    logInHandler(state, action) {
      console.log(action.payload);
      state.token = action.payload.token;
      state.isLogin = !!action.payload.token;
    },

    logOutHandler(state, action) {
      console.log("Logouthandler");
      state.token = "";
      state.isLogin = null;
    },
  },
});

export const LoginActions = LoginContext.actions;
export default LoginContext.reducer;
