import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'app/shared/types';
import { checkAuth, logIn, logOut, signUp } from './auth.thunks';

interface AuthState {
  authState: 'idle' | 'pending' | 'succeeded' | 'failed';
  authError: string | null;
  user: IUser | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  authState: 'idle',
  authError: null,
  user: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  reducers: {},
  initialState,
  extraReducers: builder => {
    // login
    builder
      .addCase(logIn.pending, state => {
        state.authError = null;
        state.authState = 'pending';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.authState = 'succeeded';
        console.log('action.payload:', action.payload);

        if (action.payload && action.payload.refresh_token) {
          state.refreshToken = action.payload.refresh_token;
        }
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.authState = 'failed';
        state.authError = payload as string;
      });
    // signup
    builder
      .addCase(signUp.pending, state => {
        state.authError = null;
        state.authState = 'pending';
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        console.log('payload:', payload);
        state.authState = 'succeeded';
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.authState = 'failed';
        state.authError = payload as string;
      });
    // logOut
    builder
      .addCase(logOut.pending, state => {
        state.authError = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.authState = 'idle';
        state.user = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.authState = 'failed';
        state.authError = payload as string;
      });
    // check auth
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      console.log('payload:', payload);
      state.authError = null;
      state.authState = 'succeeded';

      if (payload) {
        state.user = payload;
      }
    });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
