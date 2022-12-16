import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IRegion, ICity } from 'app/shared/types';
import { axiosInstance } from '../assets';

interface DirectusResponse<T> {
  data: T;
}

export const getRegions = createAsyncThunk(
  'assets/getRegions',
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get<DirectusResponse<IRegion[]>>(
        'items/regions',
        {
          params: {
            limit: -1,
          },
        },
      );

      return res.data.data;
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        return thunkApi.rejectWithValue(err.response.data);
      }

      throw error;
    }
  },
);

export const getCities = createAsyncThunk(
  'assets/getCities',
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get<DirectusResponse<ICity[]>>(
        'items/cities',
        {
          params: {
            limit: -1,
            fields: '*.*',
          },
        },
      );

      return res.data.data;
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        return thunkApi.rejectWithValue(err.response.data);
      }

      throw error;
    }
  },
);
