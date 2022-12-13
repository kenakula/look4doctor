/* eslint-disable consistent-return */
import { AuthCredentials, TransportError } from '@directus/sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserRoles } from 'app/shared/assets/user-roles';
import { IUser } from 'app/shared/types';
import { directus } from '../assets';

export const logIn = createAsyncThunk(
  'auth/login',
  async (data: AuthCredentials, thunkApi) => {
    try {
      await directus.auth.login(data);
      const authRes = await directus.users.me.read();

      return authRes as IUser;
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
        role: UserRoles.user,
      });
      await directus.auth.login(data);
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
    await directus.auth.logout();
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

      return res as IUser;
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
