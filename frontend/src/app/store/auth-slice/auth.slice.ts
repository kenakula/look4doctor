import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  authenticated: boolean;
  authErrors: string[];
}

const initialState: AuthState = {
  authenticated: false,
  authErrors: [],
};

export const authSlice = createSlice({
  name: 'auth',
  reducers: {
    resetAuthErrors: state => {
      state.authErrors = [];
    },
  },
  initialState,
});

export const authActions = authSlice.actions;
export const { resetAuthErrors } = authSlice.actions;
export const authReducer = authSlice.reducer;
