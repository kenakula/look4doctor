import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'app/shared/types';
import { checkAuth, logIn, logOut, signUp } from './auth.thunks';

interface AuthState {
  storeInited: boolean;
  authenticated: boolean;
  authProcessing: boolean;
  authError: string | null;
  user: IUser | null;
}

const initialState: AuthState = {
  storeInited: false,
  authenticated: false,
  authProcessing: false,
  authError: null,
  user: null,
};

const resetAuthState = (state: AuthState): void => {
  state.authenticated = false;
  state.authError = null;
  state.authProcessing = false;
};

export const authSlice = createSlice({
  name: 'auth',
  reducers: {
    initAuthStore: state => {
      state.storeInited = true;
    },
  },
  initialState,
  extraReducers: builder => {
    // login
    builder
      .addCase(logIn.pending, state => {
        resetAuthState(state);
        state.authProcessing = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.authProcessing = false;

        if (payload) {
          state.user = payload;
        }
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.authenticated = false;
        state.authError = payload as string;
      });
    // signup
    builder
      .addCase(signUp.pending, state => {
        resetAuthState(state);
        state.authProcessing = true;
      })
      .addCase(signUp.fulfilled, state => {
        state.authProcessing = false;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.authProcessing = false;
        state.authError = payload as string;
      });
    // logOut
    builder
      .addCase(logOut.pending, state => {
        resetAuthState(state);
        state.authProcessing = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.authProcessing = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.authProcessing = false;
        state.authError = payload as string;
      });
    // check auth
    builder
      .addCase(checkAuth.pending, state => {
        resetAuthState(state);
        state.authProcessing = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.authenticated = true;

        if (payload) {
          state.user = payload;
          state.authProcessing = false;
        }
      })
      .addCase(checkAuth.rejected, (state, { payload }) => {
        state.authProcessing = false;
        state.authError = payload as string;
      });
  },
});

export const authActions = authSlice.actions;
export const { initAuthStore } = authSlice.actions;
export const authReducer = authSlice.reducer;
