import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
    password: "",
    isRegistered: false,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },

    logout: (state) => {
      state.name = null;
      state.email = null;
      state.password = null;
    },

    register: (state, action) => {
      state.name = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },

    update: (state, action) => {
      state.name = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },

    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  login,
  logout,
  update,
  register,
  setIsRegistered,
  setIsLoggedIn,
} = authSlice.actions;

export default authSlice.reducer;
