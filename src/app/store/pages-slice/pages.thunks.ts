/* eslint-disable consistent-return */
import { TransportError } from '@directus/sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_DIRECTUS_COLLECTIONS_PATH } from 'app/shared/assets';
import { IHomePage } from 'app/shared/types';
import { axiosInstance } from '../assets';
import { ApiResponse } from '../types';

// TODO сделать api
export const getHomePageData = createAsyncThunk(
  'pages/home',
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get<ApiResponse<IHomePage>>(
        `${BASE_DIRECTUS_COLLECTIONS_PATH}/home_page`,
      );

      return res.data.data;
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
