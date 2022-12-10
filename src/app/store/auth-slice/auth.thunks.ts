import { AuthCredentials, TransportError } from '@directus/sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserRoles } from 'app/shared/assets/user-roles';
import { IUser } from 'app/shared/types';
import { directus } from '../assets';

export const logIn = createAsyncThunk(
  'auth/login',
  async (data: AuthCredentials, thunkApi) => {
    try {
      const res = await directus.auth.login(data);
      return res;
    } catch (error) {
      if (error instanceof TransportError) {
        if (!error.response) {
          throw error;
        }

        return thunkApi.rejectWithValue(error.errors[0].message);
      }
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/signup',
  async (data: AuthCredentials, thunkApi) => {
    try {
      await directus.users.createOne({
        ...data,
        first_name: 'dude',
        role: UserRoles.user,
      });
      const loginRes = await directus.auth.login(data);

      return loginRes;
    } catch (error) {
      if (error instanceof TransportError) {
        if (!error.response) {
          throw error;
        }

        return thunkApi.rejectWithValue(error.errors[0].message);
      }
    }
  },
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    const res = await directus.auth.logout();

    return res;
  } catch (error) {
    if (error instanceof TransportError) {
      if (!error.response) {
        throw error;
      }

      return thunkApi.rejectWithValue(error.errors[0].message);
    }
  }
});

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, thunkApi) => {
    try {
      const res = await directus.users.me.read();

      return res as unknown as IUser;
    } catch (error) {
      if (error instanceof TransportError) {
        if (!error.response) {
          throw error;
        }

        return thunkApi.rejectWithValue(error.errors[0].message);
      }
    }
  },
);
