import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout(state, action) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token", action.payload);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
