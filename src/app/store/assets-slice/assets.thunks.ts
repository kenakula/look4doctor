/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICity, IRegion, ISettings, ISpecialty } from 'app/shared/types';
import { AxiosError } from 'axios';
import { axiosInstance } from '../assets/axios';

interface DirectusResponse<T> {
  data: T;
}

export const getSettings = createAsyncThunk<ISettings>(
  'assets/getSettings',
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get<DirectusResponse<ISettings>>(
        'items/settings',
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

export const getSpecialties = createAsyncThunk(
  'assets/getSpecialties',
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get<DirectusResponse<ISpecialty[]>>(
        'items/specialties',
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
