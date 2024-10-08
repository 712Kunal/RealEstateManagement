import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice(
  {
    name: "auth",
    initialState: {
      user: null,
      isAuthenticated: false,
      isVerified: false,
    },
  },

  {
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isVerified = false;
      },
      setVerified: (state, action) => {
        state.isVerified = true;
      },
      logout: (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isVerified = false;
      },
    },
  }
);

const selectUser = (state) => state.auth.user;

const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

const selectIsVerified = (state) => state.auth.isVerified;

export { selectUser, selectIsAuthenticated, selectIsVerified };

export const { setUser, setVerified, logout } = authSlice.actions;

export default authSlice.reducer;
